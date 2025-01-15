import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '..', 'src', 'icons');

const modifyIcon = (filePath: string) => {
  let content = fs.readFileSync(filePath, 'utf-8');

  const propsRegex = /SVGProps<SVGSVGElement>/;
  if (propsRegex.test(content)) {
    content = content.replace(
      propsRegex,
      `(SVGProps<SVGSVGElement> & { size?: string | number; color?: string })`
    );
  }

  const svgTagRegex = /<svg([^>]*)>/;
  const svgMatch = content.match(svgTagRegex);
  if (svgMatch) {
    const svgAttributes = svgMatch[1];

    let newSvgAttributes = svgAttributes
      .replace(/fill="none"/, '')
      .replace(
        /width="[^"]*"/,
        '{...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}'
      )
      .replace(/height="[^"]*"/, '');
    newSvgAttributes += ' fill={props.color || "currentColor"}';

    content = content.replace(svgTagRegex, `<svg${newSvgAttributes}>`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
};

const main = () => {
  const tsxFiles = globSync(ICONS_DIR + '/**/*.tsx');

  tsxFiles.forEach((filePath) => {
    try {
      modifyIcon(filePath);
      console.log(`Modified: ${path.basename(filePath)}`);
    } catch (error) {
      console.error(`Error modifying ${filePath}:`, error);
    }
  });
};

main();
