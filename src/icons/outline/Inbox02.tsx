import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInbox02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.5 12.5h3.484a1.5 1.5 0 0 1 1.393.943l.246.614A1.5 1.5 0 0 0 9.016 15h5.969a1.5 1.5 0 0 0 1.392-.943l.246-.614a1.5 1.5 0 0 1 1.392-.943H21.5M8 9.5h8m-6.5-3h5M2 13.106V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.894a3 3 0 0 0-.235-1.164l-2.992-7.106A3 3 0 0 0 16.008 3H7.992a3 3 0 0 0-2.765 1.836l-2.992 7.106A3 3 0 0 0 2 13.106"
    />
  </svg>
);
export default SvgInbox02;
