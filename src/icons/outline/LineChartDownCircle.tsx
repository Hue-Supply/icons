import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChartDownCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.422 0 2.775.297 4 .832M8.619 8.62l5.821 5.821m.92.92.021.021m-3.562-.201 3.49.197m.068-.068-.197-3.49M20.36 2v3.804m0 3.029h.007"
    />
  </svg>
);
export default SvgLineChartDownCircle;
