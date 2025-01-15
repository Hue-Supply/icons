import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScale03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.75 3h4.5M21 9.75v4.5m0-7.875V5.25A2.25 2.25 0 0 0 18.75 3h-1.125M21 17.625v1.125A2.25 2.25 0 0 1 18.75 21h-1.5M6.375 3H5.25A2.25 2.25 0 0 0 3 5.25v1.5M9.6 12H5.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C3 13.139 3 13.559 3 14.4v1.8c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h1.8c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-4.2c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.655C10.861 12 10.441 12 9.6 12"
    />
  </svg>
);
export default SvgScale03;
