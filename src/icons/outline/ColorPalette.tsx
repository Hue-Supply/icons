import * as React from 'react';
import type { SVGProps } from 'react';
const SvgColorPalette = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.14 9.397h.01m4.655-2.73h.01m4.503 2.73h.01m4.218 2.083C23.678 6.686 17.746 2 12.5 2a9.5 9.5 0 1 0 0 19c1.327 0 2.096-1.318 1.357-2.262-.852-1.089-1.985-2.296-.245-3.687 1.74-1.39 6.283.14 7.934-3.571M8.965 9.397a.814.814 0 1 1-1.63 0 .814.814 0 0 1 1.63 0m4.664-2.73a.814.814 0 1 1-1.629 0 .814.814 0 0 1 1.629 0m4.514 2.73a.815.815 0 1 1-1.63 0 .815.815 0 0 1 1.63 0"
    />
  </svg>
);
export default SvgColorPalette;
