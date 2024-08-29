'use server';

import { repoTodo } from '@/core/repo/todo';
import { authUser } from '@/lib/session';
import { revalidatePath } from 'next/cache';

export async function actionTodoComplete(todoId: string) {
  await repoTodo.completeTodo(todoId);
  revalidatePath('/dashboard');
}

export async function actionTodoCreate(data: FormData) {
  const user = await authUser();
  if (!user) {
    return;
  }
  const userId = user.id;
  const title = data.get('title') as string;
  await repoTodo.createTodo(userId, title);
  revalidatePath('/dashboard');
}
