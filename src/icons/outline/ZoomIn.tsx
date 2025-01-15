import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZoomIn = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.291 21.706a1 1 0 1 0 1.418-1.412zm-3.624-5.06-.709-.705zM11.999 7.82a1 1 0 1 0-2 0zm-2 6.362a1 1 0 1 0 2 0zM14.18 12a1 1 0 1 0 0-2zm-6.362-2a1 1 0 0 0 0 2zM11 18a7 7 0 0 1-7-7H2a9 9 0 0 0 9 9zm-7-7a7 7 0 0 1 7-7V2a9 9 0 0 0-9 9zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9zm10.709 16.295-4.334-4.354-1.417 1.411 4.333 4.354zM9.999 7.818v3.18h2V7.82zm0 3.18v3.182h2V11zm4.181-1H11v2h3.18zM11 10H7.817v2H11zM18 11a6.97 6.97 0 0 1-2.042 4.941l1.417 1.412A8.98 8.98 0 0 0 20 11zm-2.042 4.941A6.98 6.98 0 0 1 11 18v2a8.98 8.98 0 0 0 6.375-2.647z"
    />
  </svg>
);
export default SvgZoomIn;
