import NextAuth, { NextAuthConfig } from 'next-auth';
import { newUserCreated } from './notification';
import Github from 'next-auth/providers/github';
import Resend from 'next-auth/providers/resend';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/db';

export const authConfig = {
  adapter: DrizzleAdapter(db),
  pages: {
    error: '/login',
  },
  // api/auth/signinページのtheme設定 デフォルトページがあれば必要なし
  // theme: {
  //   colorScheme: 'light',
  //   logo: '/favicon.ico',
  //   buttonText: '#ffffff',
  //   brandColor: '#000000',
  // },
  providers: [
    Github,
    // Resend({
    //   from: 'auth@next-temp.example.com',
    // }),
  ],
  callbacks: {
    // サインイン時
    jwt({ token, user }) {
      if (user && user.id) {
        token.id = user.id;
      }
      return token;
    },
    // セッションを取得する度
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    // リクエスト時
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const paths = ['/dashboard']; // ログインしたユーザーのみアクセス可能なパス
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path),
      );
      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL('/login', nextUrl.origin);
        redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
  },
  session: {
    strategy: 'jwt',
  },
  // auth.jsのイベントをtriggerに処理を行うことができる
  events: {
    createUser: async ({ user }) => {
      await newUserCreated(user);
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
