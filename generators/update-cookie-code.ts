const cookiesFS = require('fs');
const cookiesPath = require('path');

type CookiesCodeRegisteryType =
  | 'authentication-form'
  | 'hero-section'
  | 'empty-state'
  | 'image-card'
  | 'toggle-list';

const COOKIES_OUTPUT_PATH = cookiesPath.join(
  __dirname,
  '../package/registry/cookies-setup-code.tsx',
);
const COOKIES_FILES_TO_REGISTER: Record<
  CookiesCodeRegisteryType,
  { registerAt: string; path: string }
> = {
  'authentication-form': {
    registerAt: 'components/cookies/authentication-form.tsx',
    path: cookiesPath.join(
      __dirname,
      '../components/cookies/authentication-form.tsx',
    ),
  },
  'hero-section': {
    registerAt: 'components/cookies/hero-section.tsx',
    path: cookiesPath.join(__dirname, '../components/cookies/hero-section.tsx'),
  },
  'empty-state': {
    registerAt: 'components/cookies/empty-state.tsx',
    path: cookiesPath.join(__dirname, '../components/cookies/empty-state.tsx'),
  },
  'image-card': {
    registerAt: 'components/cookies/image-card.tsx',
    path: cookiesPath.join(__dirname, '../components/cookies/image-card.tsx'),
  },
  'toggle-list': {
    registerAt: 'components/cookies/toggle-list.tsx',
    path: cookiesPath.join(__dirname, '../components/cookies/toggle-list.tsx'),
  },
};

const cookiesSetupCode = Object.keys(COOKIES_FILES_TO_REGISTER).reduce(
  (acc, name) => {
    const { registerAt, path: filePath } =
      COOKIES_FILES_TO_REGISTER[name as CookiesCodeRegisteryType];
    const code: string = cookiesFS.readFileSync(filePath, 'utf-8');
    acc[name] = { registerAt, code };
    return acc;
  },
  {} as Record<string, { registerAt: string; code: string }>,
);

const tsxContentForCookies = `\
// This file is auto-generated. Do not modify manually.

type CookiesCodeRegisteryType =
  | 'authentication-form'
  | 'hero-section'
  | 'empty-state'
  | 'image-card'
  | 'toggle-list';
  
export const COOKIES_SETUP_CODE: Record<CookiesCodeRegisteryType, { registerAt: string; code: string }> = ${JSON.stringify(cookiesSetupCode, null, 2)};
`;

cookiesFS.writeFileSync(COOKIES_OUTPUT_PATH, tsxContentForCookies, 'utf-8');
console.log(
  '[Generator > Update Cookies Setup Code]',
  'Successfully updated cookies-setup-code in package/registry/cookes-setup-code.tsx',
);
