import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayerSingle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.518 14.16c-1.431-.692-2.147-1.038-2.374-1.51a1.5 1.5 0 0 1 0-1.3c.227-.472.943-.818 2.374-1.51L9.91 7.714c.768-.371 1.151-.557 1.553-.63a3 3 0 0 1 1.075 0c.401.073.785.259 1.552.63l4.393 2.124c1.43.693 2.146 1.039 2.373 1.511a1.5 1.5 0 0 1 0 1.3c-.227.472-.942.818-2.373 1.51l-4.393 2.125c-.767.371-1.15.557-1.552.63-.356.065-.72.065-1.075 0-.402-.073-.785-.259-1.553-.63z"
    />
  </svg>
);
export default SvgLayerSingle;
