import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart10 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 21v-8H5.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C3 14.139 3 14.559 3 15.4v3.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163zm0 0h6m-6 0V10.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C10.139 8 10.559 8 11.4 8H15v13m0 0h3.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C19.861 3 19.441 3 18.6 3h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656C15 4.139 15 4.559 15 5.4z"
    />
  </svg>
);
export default SvgChart10;
