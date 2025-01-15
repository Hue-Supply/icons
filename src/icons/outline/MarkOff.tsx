import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.285 17.598A8 8 0 0 1 17.5 6.19M9.579 19.627a8 8 0 0 0 10.06-10.01m-4.697 2.973a3 3 0 0 1-2.316 2.345M14 9.764a3 3 0 0 0-4.149 4.33M20.5 12H22M2 12h1.5M12 3.5V2m0 20v-1.5m-9.5 1 19-19"
    />
  </svg>
);
export default SvgMarkOff;
