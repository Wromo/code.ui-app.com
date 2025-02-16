import { LLMManager } from '~/lib/modules/llm/manager';
import type { Template } from '~/types/template';

export const WORK_DIR_NAME = 'project';
export const WORK_DIR = `/home/${WORK_DIR_NAME}`;
export const MODIFICATIONS_TAG_NAME = 'codeuiapp_file_modifications';
export const MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;
export const PROVIDER_REGEX = /\[Provider: (.*?)\]\n\n/;
export const DEFAULT_MODEL = 'claude-3-5-sonnet-latest';
export const PROMPT_COOKIE_KEY = 'cachedPrompt';

const llmManager = LLMManager.getInstance(import.meta.env);

export const PROVIDER_LIST = llmManager.getAllProviders();
export const DEFAULT_PROVIDER = llmManager.getDefaultProvider();

export const providerBaseUrlEnvKeys: Record<string, { baseUrlKey?: string; apiTokenKey?: string }> = {};
PROVIDER_LIST.forEach((provider) => {
  providerBaseUrlEnvKeys[provider.name] = {
    baseUrlKey: provider.config.baseUrlKey,
    apiTokenKey: provider.config.apiTokenKey,
  };
});

// starter Templates

export const STARTER_TEMPLATES: Template[] = [
  {
    name: 'codeuiapp-astro-basic',
    label: 'Astro Basic',
    description: 'Lightweight Astro starter template for building fast static websites',
    githubRepo: 'thecodacus/codeuiapp-astro-basic-template',
    tags: ['astro', 'blog', 'performance'],
    icon: 'i-codeuiapp:astro',
  },
  {
    name: 'codeuiapp-nextjs-shadcn',
    label: 'Next.js with shadcn/ui',
    description: 'Next.js starter fullstack template integrated with shadcn/ui components and styling system',
    githubRepo: 'thecodacus/codeuiapp-nextjs-shadcn-template',
    tags: ['nextjs', 'react', 'typescript', 'shadcn', 'tailwind'],
    icon: 'i-codeuiapp:nextjs',
  },
  {
    name: 'codeuiapp-qwik-ts',
    label: 'Qwik TypeScript',
    description: 'Qwik framework starter with TypeScript for building resumable applications',
    githubRepo: 'thecodacus/codeuiapp-qwik-ts-template',
    tags: ['qwik', 'typescript', 'performance', 'resumable'],
    icon: 'i-codeuiapp:qwik',
  },
  {
    name: 'codeuiapp-remix-ts',
    label: 'Remix TypeScript',
    description: 'Remix framework starter with TypeScript for full-stack web applications',
    githubRepo: 'thecodacus/codeuiapp-remix-ts-template',
    tags: ['remix', 'typescript', 'fullstack', 'react'],
    icon: 'i-codeuiapp:remix',
  },
  {
    name: 'codeuiapp-slidev',
    label: 'Slidev Presentation',
    description: 'Slidev starter template for creating developer-friendly presentations using Markdown',
    githubRepo: 'thecodacus/codeuiapp-slidev-template',
    tags: ['slidev', 'presentation', 'markdown'],
    icon: 'i-codeuiapp:slidev',
  },
  {
    name: 'codeuiapp-sveltekit',
    label: 'SvelteKit',
    description: 'SvelteKit starter template for building fast, efficient web applications',
    githubRepo: 'codeuiapp-sveltekit-template',
    tags: ['svelte', 'sveltekit', 'typescript'],
    icon: 'i-codeuiapp:svelte',
  },
  {
    name: 'vanilla-vite',
    label: 'Vanilla + Vite',
    description: 'Minimal Vite starter template for vanilla JavaScript projects',
    githubRepo: 'thecodacus/vanilla-vite-template',
    tags: ['vite', 'vanilla-js', 'minimal'],
    icon: 'i-codeuiapp:vite',
  },
  {
    name: 'codeuiapp-vite-react',
    label: 'React + Vite + typescript',
    description: 'React starter template powered by Vite for fast development experience',
    githubRepo: 'thecodacus/codeuiapp-vite-react-ts-template',
    tags: ['react', 'vite', 'frontend'],
    icon: 'i-codeuiapp:react',
  },
  {
    name: 'codeuiapp-vite-ts',
    label: 'Vite + TypeScript',
    description: 'Vite starter template with TypeScript configuration for type-safe development',
    githubRepo: 'thecodacus/codeuiapp-vite-ts-template',
    tags: ['vite', 'typescript', 'minimal'],
    icon: 'i-codeuiapp:typescript',
  },
  {
    name: 'codeuiapp-vue',
    label: 'Vue.js',
    description: 'Vue.js starter template with modern tooling and best practices',
    githubRepo: 'thecodacus/codeuiapp-vue-template',
    tags: ['vue', 'typescript', 'frontend'],
    icon: 'i-codeuiapp:vue',
  },
  {
    name: 'codeuiapp-angular',
    label: 'Angular Starter',
    description: 'A modern Angular starter template with TypeScript support and best practices configuration',
    githubRepo: 'thecodacus/codeuiapp-angular-template',
    tags: ['angular', 'typescript', 'frontend', 'spa'],
    icon: 'i-codeuiapp:angular',
  },
];
