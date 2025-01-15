import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBreadOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.734 3.28A3 3 0 0 0 2 6v.5A1.5 1.5 0 0 0 3.5 8a.5.5 0 0 1 .5.5V18a3 3 0 0 0 3 3h10a3 3 0 0 0 2.697-1.684M20 14V8.5a.5.5 0 0 1 .5-.5A1.5 1.5 0 0 0 22 6.5V6a3 3 0 0 0-3-3H9.5m-7-1 20 20"
    />
  </svg>
);
export default SvgBreadOff;
