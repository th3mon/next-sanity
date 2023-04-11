import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';
import { GradientText } from '@/app/components/GradientText';
export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1
        className="
          text-7xl
          font-extrabold
        "
      >
        Hello I&apos;m <GradientText>Przemysław</GradientText>!
      </h1>
      <p
        className="
          mt-10
          text-xl
          text-gray-700
        "
      >
        Hello everyone! Check out my projects!
      </p>
      <h2
        className="
          mt-24
          font-bold
          text-gray-700
          text-3xl
        "
      >
        My projects
      </h2>
      <div
        className="
          mt-5
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {projects.map((project) => (
          <Link
            className="
              bg-purple-950
              rounded-lg
              p-3
              hover:scale-105
              transition
            "
            key={project._id}
            href={`/projects/${project.slug}`}
          >
            {
              project.image && (
                <Image
                  className="
                    object-cover
                    rounded-lg
                  "
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                />
              )
            }
            <div
              className="
                mt-2
                font-extrabold
                text-purple-300
              "
            >
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
