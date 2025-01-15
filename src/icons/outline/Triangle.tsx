import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTriangle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.922 5.288c.682-1.181 1.023-1.772 1.468-1.97a1.5 1.5 0 0 1 1.22 0c.446.198.787.789 1.47 1.97l6.88 11.918c.682 1.18 1.023 1.772.972 2.256a1.5 1.5 0 0 1-.61 1.057c-.395.287-1.077.287-2.44.287H5.12c-1.364 0-2.046 0-2.44-.287a1.5 1.5 0 0 1-.61-1.057c-.052-.484.29-1.075.972-2.256z"
    />
  </svg>
);
export default SvgTriangle;
