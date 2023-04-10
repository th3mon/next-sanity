import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'dydfr307',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-04-10',
    baseUrl: '/admin',
    plugins: [deskTool()]
});

export default config;