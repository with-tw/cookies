const cookiesFS = require('fs');
const cookiesPath = require('path');

type CookiesCodeRegisteryType = 'authentication-form';

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

type CookiesCodeRegisteryType = 'authentication-form';
  
export const COOKIES_SETUP_CODE: Record<CookiesCodeRegisteryType, { registerAt: string; code: string }> = ${JSON.stringify(cookiesSetupCode, null, 2)};
`;

cookiesFS.writeFileSync(COOKIES_OUTPUT_PATH, tsxContentForCookies, 'utf-8');
console.log(
  '[Generator > Update Cookies Setup Code]',
  'Successfully updated cookies-setup-code in package/registry/cookes-setup-code.tsx',
);
