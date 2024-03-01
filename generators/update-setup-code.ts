const fs = require('fs');
const path = require('path');

type FileRegistryType = { name: string; registerAt: string; path: string };

const OUTPUT_PATH = path.join(__dirname, '../package/registry/setup-code.json');
const FILES_TO_REGISTER: FileRegistryType[] = [
  {
    name: 'animation-config',
    registerAt: 'components/configs/animation-config.ts',
    path: path.join(__dirname, '../components/configs/animation-config.ts'),
  },
  {
    name: 'utils',
    registerAt: 'helpers/utils.ts',
    path: path.join(__dirname, '../helpers/utils.ts'),
  },
  {
    name: 'button',
    registerAt: 'components/ui/button.tsx',
    path: path.join(__dirname, '../components/ui/button.tsx'),
  },
  {
    name: 'responsive-control',
    registerAt: 'components/layouts/responsive-control.tsx',
    path: path.join(__dirname, '../components/layouts/responsive-control.tsx'),
  },
];

type ConfigObjectType = Pick<FileRegistryType, 'name'> &
  Pick<FileRegistryType, 'registerAt'> & { code: string };

function updateSetupCode() {
  let configObject: ConfigObjectType[] = [];
  try {
    // Fetching code from all the listed files
    FILES_TO_REGISTER.map(({ name, registerAt, path }: FileRegistryType) => {
      const fileCode: string = fs.readFileSync(path, 'utf-8');
      configObject.push({
        name,
        registerAt,
        code: fileCode,
      });
    });
    // Convert the config object to JSON string
    const jsonConfigObject: string = JSON.stringify(configObject);
    // Save the converted JSON string to OUTPUT_PATH
    fs.writeFileSync(OUTPUT_PATH, jsonConfigObject, 'utf-8');
    console.log(
      '[Generator > Update Setup Code]',
      'Successfully added setup-code for utils and components to package/registry/setup-code.json',
    );
  } catch (error) {
    console.error(
      '[Generator > Update Setup Code]',
      'Error while adding the setup-code for utils and components to package/registry/setup-code.json',
      `[Error Message] ${(error as Error).message}`,
      `[Error Cause] ${(error as Error).cause}`,
    );
  }
}

updateSetupCode();
