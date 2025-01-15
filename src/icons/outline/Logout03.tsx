import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 8v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C13.28 3 14.12 3 15.8 3h.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C11 18.72 11 17.88 11 16.2V16m-7.98-4 4.269 4.27M3.019 12l4.27-4.27M3.019 12H13.64"
    />
  </svg>
);
export default SvgLogout03;
