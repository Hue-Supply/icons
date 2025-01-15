import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.02 3h-2.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3.02 5.28 3.02 6.12 3.02 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C5.3 21 6.14 21 7.82 21h2.2M21 12l-4.27 4.27M21 12l-4.27-4.27M21 12H9.521"
    />
  </svg>
);
export default SvgLogout02;
