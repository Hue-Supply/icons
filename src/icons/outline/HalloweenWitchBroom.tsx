import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenWitchBroom = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m12.38 11.782 2.294-1.62L15.5 8 18 7l4.5-5.5M2 15.657l4.064-2.863c.126-.089.188-.133.25-.175a6 6 0 0 1 3.182-1.008c.075-.002.152-.002.306-.002h.268A2.92 2.92 0 0 1 12.943 14a5.84 5.84 0 0 1-1.589 5.173l-2.902 2.937-.707-3.535-2.475.353v-2.121z"
    />
  </svg>
);
export default SvgHalloweenWitchBroom;
