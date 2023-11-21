import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => ({ default: (await import('./AboutPage')).AboutPage }))