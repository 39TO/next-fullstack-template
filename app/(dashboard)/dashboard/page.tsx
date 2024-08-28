import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function DashboarDeciderPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  return (
    <div className="space-y-6">
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
}
