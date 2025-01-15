import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearchQuestion = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21 21-4-4M8.815 8.752a2.248 2.248 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248v.207m.03 2.793h.01M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgSearchQuestion;
