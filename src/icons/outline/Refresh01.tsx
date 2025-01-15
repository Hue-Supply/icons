import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.3 11.7a8 8 0 0 1 14.246-5M6.484 11.375l-2.232 2.006-2.005-2.232m17.46.567a7.958 7.958 0 0 1-13.585 5.627m11.41-4.735 2.323-1.874 1.874 2.322"
    />
  </svg>
);
export default SvgRefresh01;
