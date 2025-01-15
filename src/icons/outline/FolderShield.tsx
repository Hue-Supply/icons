import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderShield = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2 7h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2zm0 0h13l-1.09-1.744c-.515-.824-.772-1.235-1.12-1.534a3 3 0 0 0-1.056-.585C11.296 3 10.811 3 9.84 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2zm9.498 3.809-1.122.35c-.425.133-.637.2-.794.327-.139.113-.246.26-.313.425-.075.189-.075.41-.075.855v.308c0 .823 0 1.234.09 1.622.09.394.248.77.466 1.11.215.334.51.622 1.098 1.197.39.381.584.572.806.649.224.078.468.078.692 0 .222-.077.417-.268.806-.649.589-.575.883-.863 1.098-1.197.218-.34.376-.716.467-1.11.089-.388.089-.8.089-1.622v-.308c0-.444 0-.666-.075-.855a1.05 1.05 0 0 0-.313-.425c-.157-.128-.37-.194-.793-.327l-1.123-.35c-.186-.059-.28-.088-.375-.1q-.127-.015-.254 0c-.095.012-.189.041-.375.1Z"
    />
  </svg>
);
export default SvgFolderShield;
