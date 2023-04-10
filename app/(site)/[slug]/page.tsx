import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string },
}
export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <div>
      <h1
        className="
          bg-gradient-to-r
          from-orange-400
          via-rose-600
          to-purple-600
          bg-clip-text
          text-transparent
          text-5xl
          font-extrabold
          leading-normal
        "
      >
        {page.title}
      </h1>
      <div
        className="
          text-lg
          text-gray-700
          mt-10
        "
      >
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
