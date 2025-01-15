import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.997 8v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.277 3 9.117 3 10.797 3H16.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21h-5.403c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.31-1.311c-.328-.642-.328-1.482-.328-3.162V16m9.5-4-4.27 4.27m4.27-4.27-4.27-4.27m4.27 4.27H3.02"
    />
  </svg>
);
export default SvgLogin03;
