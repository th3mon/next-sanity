import { ReactNode } from 'react';
import { getPages } from '@/sanity/sanity-utils';
import Link from 'next/link';
import '../globals.css';

export const metadata = {
  title: 'Przemysław Szelenberger Portfolio',
  description: 'Generated by create next app + Sanity',
};

export default async function RootLayout({
 children,
}: {
  children: ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
    <body
      className="
        max-w-3xl
        mx-auto
        py-10
      "
    >
      <header
        className="
          flex
          items-center
          justify-between
        "
      >
        <Link
          className="
            bg-gradient-to-r
            from-orange-400
            via-rose-600
            to-purple-600
            bg-clip-text
            text-transparent
            text-lg
            font-bold
          "
          href="/"
        >
          Przemysław Szelenberger
        </Link>
        <div
          className="
            flex
            items-center
            gap-3
            text-sm
            text-gray-600
          "
        >
          {pages.map((page) => (
            <Link
              className="
                py-2
                px-4
                rounded-xl
                hover:bg-pink-500
                hover:text-pink-100
                transition
              "
              key={page._id}
              href={`/${page.slug}`}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </header>
      <main className="py-20">
        {children}
      </main>
    </body>
    </html>
  );
}
