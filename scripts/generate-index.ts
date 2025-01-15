import { writeFileSync } from 'fs';
import { resolve, join, basename, sep } from 'path';
import { globSync } from 'glob';

function capitalizeFirst(str: string) {
  return (str.charAt(0).toUpperCase() + str.slice(1)).replace('Outline', '');
}

const iconsDir = resolve('src/icons');
const indexPath = join(resolve(), 'src', 'index.ts');

const files = globSync('**/*.tsx', { cwd: iconsDir }).map((file) =>
  join(iconsDir, file)
);

const exportStatements = files
  .map((file) => {
    const relativePath = file.replace(iconsDir + sep, '');
    const parts = relativePath.split(sep);
    const fileName = parts.pop() || '';
    const baseName = basename(fileName, '.tsx');
    const folderName = parts[0];

    let componentName = baseName;
    if (folderName) {
      componentName += capitalizeFirst(folderName);
    }
    return `export { default as ${componentName} } from './icons/${relativePath.replace(/\\/g, '/').replace('.tsx', '')}';`;
  })
  .join('\n');

writeFileSync(indexPath, exportStatements);
console.log(`Generated index.ts with ${files.length} icon exports.`);
