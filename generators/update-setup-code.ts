const fs = require('fs');
const path = require('path');
const devUtils = require('../helpers/dev');

const devConsole = devUtils.DevConsole;

type CodeRegisteryType =
  | 'animation-config'
  | 'utils'
  | 'button'
  | 'icon-button'
  | 'input'
  | 'card'
  | 'switch'
  | 'accordion'
  | 'callout'
  | 'timeline'
  | 'tab-menu'
  | 'responsive-control';

const OUTPUT_PATH = path.join(__dirname, '../package/registry/setup-code.tsx');
const FILES_TO_REGISTER: Record<
  CodeRegisteryType,
  { registerAt: string; path: string }
> = {
  'animation-config': {
    registerAt: 'components/configs/animation-config.ts',
    path: path.join(__dirname, '../components/configs/animation-config.ts'),
  },
  utils: {
    registerAt: 'helpers/utils.ts',
    path: path.join(__dirname, '../helpers/utils.ts'),
  },
  button: {
    registerAt: 'components/ui/button.tsx',
    path: path.join(__dirname, '../components/ui/button.tsx'),
  },
  'icon-button': {
    registerAt: 'components/ui/icon-button.tsx',
    path: path.join(__dirname, '../components/ui/icon-button.tsx'),
  },
  input: {
    registerAt: 'components/ui/input.tsx',
    path: path.join(__dirname, '../components/ui/input.tsx'),
  },
  card: {
    registerAt: 'components/ui/card.tsx',
    path: path.join(__dirname, '../components/ui/card.tsx'),
  },
  switch: {
    registerAt: 'components/ui/switch.tsx',
    path: path.join(__dirname, '../components/ui/switch.tsx'),
  },
  accordion: {
    registerAt: 'components/ui/accordion.tsx',
    path: path.join(__dirname, '../components/ui/accordion.tsx'),
  },
  callout: {
    registerAt: 'components/ui/callout.tsx',
    path: path.join(__dirname, '../components/ui/callout.tsx'),
  },
  timeline: {
    registerAt: 'components/ui/timeline.tsx',
    path: path.join(__dirname, '../components/ui/timeline.tsx'),
  },
  'tab-menu': {
    registerAt: 'components/ui/tab-menu.tsx',
    path: path.join(__dirname, '../components/ui/tab-menu.tsx'),
  },
  'responsive-control': {
    registerAt: 'components/layouts/responsive-control.tsx',
    path: path.join(__dirname, '../components/layouts/responsive-control.tsx'),
  },
};

const setupCode = Object.keys(FILES_TO_REGISTER).reduce(
  (acc, name) => {
    const { registerAt, path: filePath } =
      FILES_TO_REGISTER[name as CodeRegisteryType];
    const code: string = fs.readFileSync(filePath, 'utf-8');
    acc[name] = { registerAt, code };
    return acc;
  },
  {} as Record<string, { registerAt: string; code: string }>,
);

const tsxContent = `\
// This file is auto-generated. Do not modify manually.

export type CodeRegisteryType =
  | 'animation-config'
  | 'utils'
  | 'button'
  | 'icon-button'
  | 'input'
  | 'card'
  | 'switch'
  | 'accordion'
  | 'callout'
  | 'timeline'
  | 'tab-menu'
  | 'responsive-control';
  
export const SETUP_CODE: Record<CodeRegisteryType, { registerAt: string; code: string }> = ${JSON.stringify(setupCode, null, 2)};
`;

fs.writeFileSync(OUTPUT_PATH, tsxContent, 'utf-8');
devConsole.log(
  '[Generator > Update Setup Code]',
  'Successfully updated setup-code in package/registry/setup-code.tsx',
);
