import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { GradientText } from '@/app/components/GradientText';

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
          text-5xl
          font-extrabold
          leading-normal
        "
      >
        <GradientText>
          {page.title}
        </GradientText>
      </h1>
      <div
        className="
          text-lg
          text-gray-700
          mt-10
          prose
          prose-a:text-pink-500
          prose-a:hover:text-pink-100
          prose-a:hover:bg-pink-500
          prose-a:transition
        "
      >
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
