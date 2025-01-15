import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiRobot02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 12h2M12 4v2m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2 12h2m10.5-.5v1.456m-5-1.456v1.456M7 18h10v4H7zm2.5 0h5a5.5 5.5 0 1 0 0-11h-5a5.5 5.5 0 1 0 0 11"
    />
  </svg>
);
export default SvgAiRobot02;
