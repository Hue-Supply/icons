import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWindOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.4 7.5A3 3 0 1 1 19 12h-1.613M2 12h9.729M9.264 4.98A2.039 2.039 0 0 1 13.07 6c0 .5-.18.96-.48 1.314M2 8.04h5.46M2 15.96h13.445m-.949 3.06a2.039 2.039 0 0 0 3.66-.257M2 2l20 20"
    />
  </svg>
);
export default SvgWindOff;
