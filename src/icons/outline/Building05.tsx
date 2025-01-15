import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuilding05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 3 13.88 3 12.2 3h-.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C7 5.28 7 6.12 7 7.8V21m10 0H7m10 0h5v-8.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 8 18.88 8 17.2 8H17zM7 21V11h-.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 13.28 2 14.12 2 15.8V21zm-3 0h16M10.305 7h3.39m-3.39 4h3.39m-3.39 4h3.39"
    />
  </svg>
);
export default SvgBuilding05;
