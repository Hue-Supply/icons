import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhone01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 6h2m-2.2 15h2.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 18.72 18 17.88 18 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 3 14.88 3 13.2 3h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 5.28 6 6.12 6 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.28 21 9.12 21 10.8 21"
    />
  </svg>
);
export default SvgPhone01;
