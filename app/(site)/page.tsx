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
          mt-3
          text-xl
          text-gray-600
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
              border-2
              border-gray-500
              rounded-lg
              p-1
              hover:scale-105
              hover:border-blue-500
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
                    border
                    border-gray-500
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
              "
            >
              <GradientText>{project.name}</GradientText>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
