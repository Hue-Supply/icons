import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 3h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C3 7.56 3 9.24 3 12.6V16m8.296 5H16.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2v-4.904c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.31c-.642-.328-1.482-.328-3.162-.328h-4.904c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162V16.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.776 21 9.616 21 11.296 21"
    />
  </svg>
);
export default SvgCopy01;
