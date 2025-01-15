import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasStocking = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.278 22.229a5.13 5.13 0 0 1 3.843-8.321M3.797 10.845a5.13 5.13 0 0 1 3.281 8.123M5.206 5.327 15.302 8.21m-4.245-5.892 2.091.597c.789.225 1.183.338 1.487.508a3 3 0 0 1 1.534 2.76c-.016.348-.129.743-.354 1.531l-.156.548c-.048.167-.072.25-.09.325a3 3 0 0 0 1.524 3.33c.067.035.146.072.303.145l1.01.47a5.128 5.128 0 0 1-4.022 9.427l-8.46-3.3c-1.438-.56-2.157-.84-2.62-1.332a3 3 0 0 1-.777-1.565c-.11-.667.101-1.408.525-2.892l2.071-7.255c.462-1.615.692-2.423 1.183-2.95a3 3 0 0 1 1.62-.9c.707-.139 1.515.092 3.13.553Z"
    />
  </svg>
);
export default SvgChristmasStocking;
