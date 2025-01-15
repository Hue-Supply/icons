import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.676 11.7a8 8 0 0 0-14.246-5m12.063 4.676 2.23 2.006 2.006-2.232m-17.46.567a7.958 7.958 0 0 0 13.586 5.627M6.444 12.61 4.12 10.735l-1.874 2.322"
    />
  </svg>
);
export default SvgRefresh02;
