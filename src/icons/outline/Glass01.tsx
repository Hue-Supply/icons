import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlass01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 25 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.113 4.22.458 5.031c.054.6.081.9.083 1.147a6 6 0 0 1-5.504 6.027c-.247.02-.548.02-1.15.02M19.113 4.22c0 1.227-2.737 2.223-6.113 2.223S6.887 5.447 6.887 4.22m12.226 0c0-1.228-2.737-2.223-6.113-2.223s-6.113.995-6.113 2.223m0 0L6.43 9.25c-.055.6-.082.9-.084 1.147a6 6 0 0 0 5.504 6.027c.247.02.548.02 1.15.02m0 0v5.558m0 0h3.89m-3.89 0H9.11"
    />
  </svg>
);
export default SvgGlass01;
