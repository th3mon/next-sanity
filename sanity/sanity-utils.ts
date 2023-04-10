import {
  createClient,
  groq
} from 'next-sanity';
import { Project } from '@/types/Project';

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'dydfr307',
    dataset: 'production',
    apiVersion: '2023-04-10',
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: 'dydfr307',
    dataset: 'production',
    apiVersion: '2023-04-10',
  });

  // TODO: Find out if it is possible to get just one record
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
