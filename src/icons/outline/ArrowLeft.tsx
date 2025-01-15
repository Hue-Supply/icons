import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.07 12.071h-14M12 5l-7.071 7.071 7.07 7.071"
    />
  </svg>
);
export default SvgArrowLeft;
