import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayersTwo = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.754 12.004.729-.353c1.43-.692 2.146-1.038 2.373-1.51a1.5 1.5 0 0 0 0-1.3c-.227-.473-.942-.819-2.373-1.51L14.09 5.205c-.767-.371-1.15-.557-1.552-.63a3 3 0 0 0-1.075 0c-.402.073-.785.259-1.553.63L5.518 7.33c-1.431.692-2.147 1.038-2.374 1.51a1.5 1.5 0 0 0 0 1.3c.227.473.943.819 2.374 1.511l.689.333m11.547.02-3.664 1.772c-.767.37-1.15.556-1.552.63-.356.064-.72.064-1.075 0-.402-.074-.785-.26-1.553-.63l-3.703-1.792m11.547.02.114.048.615.297c1.43.692 2.146 1.038 2.373 1.51a1.5 1.5 0 0 1 0 1.3c-.227.473-.942.819-2.373 1.511l-4.393 2.124c-.767.372-1.15.557-1.552.63-.356.065-.72.065-1.075 0-.402-.073-.785-.258-1.553-.63L5.518 16.67c-1.431-.692-2.147-1.038-2.374-1.51a1.5 1.5 0 0 1 0-1.3c.227-.473.943-.819 2.374-1.511l.412-.2.277-.165"
    />
  </svg>
);
export default SvgLayersTwo;
