import { auth } from './auth';

export type SUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export async function authUser() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return undefined;
  }
  return user as SUser;
}
