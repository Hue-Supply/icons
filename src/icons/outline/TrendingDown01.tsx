import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrendingDown01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3 7.712 5.374 5.374c.594.594.891.891 1.234 1.003a1.5 1.5 0 0 0 .927 0c.342-.112.64-.409 1.233-1.003l1.426-1.426c.635-.635.952-.952 1.314-1.06a1.5 1.5 0 0 1 .968.035c.353.135.646.475 1.232 1.154L21 16.763m1-4v5h-5"
    />
  </svg>
);
export default SvgTrendingDown01;
