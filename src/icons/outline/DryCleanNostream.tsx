import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDryCleanNostream = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m14.992 1.993 7.004 7.004M18 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgDryCleanNostream;
