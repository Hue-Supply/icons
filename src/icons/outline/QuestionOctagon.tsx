import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuestionOctagon = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.815 9.752a2.248 2.248 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248v.207m.03 2.793h.01m4.61 5.664 4.828-4.828A2 2 0 0 0 22 15.172V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 15.172 2H8.828a2 2 0 0 0-1.414.586L2.586 7.414A2 2 0 0 0 2 8.828v6.344a2 2 0 0 0 .586 1.414l4.828 4.828A2 2 0 0 0 8.828 22h6.344a2 2 0 0 0 1.414-.586"
    />
  </svg>
);
export default SvgQuestionOctagon;
