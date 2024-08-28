import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank">
            twitter
          </Link>
          <h1 className="font-sans text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js FullStack Template
          </h1>
          <p className="max-w-[42rem] font-display leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A fullstack template for Next.js with TypeScript, Tailwind CSS,
            Prisma, and PostgreSQL.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
              )}>
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
