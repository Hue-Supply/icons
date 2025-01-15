import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBluetooth = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 12V2l7 5zm0 0v10l7-5zm0 0-5 4m5-4L6 8"
    />
  </svg>
);
export default SvgBluetooth;
