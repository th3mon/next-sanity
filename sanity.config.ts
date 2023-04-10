import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
  projectId: 'dydfr307',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-10',
  baseUrl: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
