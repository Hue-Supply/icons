import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChefHat = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.045 16.98v-3.095A4.002 4.002 0 1 1 8.09 6.15a4.001 4.001 0 0 1 7.82 0 4 4 0 1 1 2.046 7.735v3.095M6.911 21h10.176c.665 0 .997 0 1.251-.128a1.2 1.2 0 0 0 .533-.533c.128-.254.128-.586.128-1.25 0-.665 0-.998-.128-1.252a1.2 1.2 0 0 0-.533-.533c-.254-.128-.586-.128-1.25-.128H6.911c-.665 0-.997 0-1.251.128a1.2 1.2 0 0 0-.533.533C5 18.091 5 18.424 5 19.088c0 .665 0 .997.128 1.251a1.2 1.2 0 0 0 .533.533c.254.128.586.128 1.25.128"
    />
  </svg>
);
export default SvgChefHat;
