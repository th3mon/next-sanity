import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from '@/sanity/schemas/project.schema';

const config = defineConfig({
  projectId: 'dydfr307',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-10',
  baseUrl: '/admin',
  plugins: [deskTool()],
  schema: { types: [project] }
});

export default config;
