import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaptop04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.667 16c.736 0 1.333.597 1.333 1.333a2.67 2.67 0 0 1-2.235 2.632M20.667 16H16m4.667 0H21V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218M3.333 16C2.597 16 2 16.597 2 17.333A2.667 2.667 0 0 0 4.667 20H14.5M3.333 16H10.5m-7.167 0H3V8.5M1.75 2l20 20"
    />
  </svg>
);
export default SvgLaptop04;
