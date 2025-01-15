import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart11 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 21v-8h3.6c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.32.163.74.163 1.581v3.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163zm0 0H9m6 0V10.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 8 13.441 8 12.6 8H9v13m0 0H5.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C3 19.861 3 19.441 3 18.6V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C4.139 3 4.559 3 5.4 3h1.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656C9 4.139 9 4.559 9 5.4z"
    />
  </svg>
);
export default SvgChart11;
