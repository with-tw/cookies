const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(
  __dirname,
  '../components/configs/animation-config.ts',
);
const outputFilePath = path.join(
  __dirname,
  '../package/setup-code/animations.json',
);

try {
  // Read the content from the TSX file
  const animationConfigContent: string = fs.readFileSync(
    inputFilePath,
    'utf-8',
  );

  // Create an object to store the string
  const dataObject: Record<string, string> = {
    animationConfig: animationConfigContent,
  };

  // Convert the object to a JSON string
  const jsonData: string = JSON.stringify(dataObject, null, 2);

  // Save the JSON string to the output file
  fs.writeFileSync(outputFilePath, jsonData, 'utf-8');

  console.log('Added animation-configs to package/setup-code/animations.json');
} catch (error) {
  console.error('Error:', (error as Error).message);
}
