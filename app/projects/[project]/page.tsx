import { getProject } from '@/sanity/sanity-utils';

type Props = {
  params: { project: string },
}
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-rose-600 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold leading-normal">
          {project.name}
        </h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
    </div>
  );
}
