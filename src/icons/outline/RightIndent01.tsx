import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRightIndent01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.994 5.25h7M4 9.75h7m-7.006 4.5h16.012m-16.012 4.5h16.012m0-10.7v-1.1c0-1.193 0-1.79-.247-2.113a1.2 1.2 0 0 0-.9-.468c-.407-.018-.896.324-1.874 1.008l-.785.55c-.756.53-1.134.794-1.267 1.123a1.2 1.2 0 0 0 0 .9c.133.33.511.594 1.267 1.123l.785.55c.978.684 1.467 1.026 1.874 1.009a1.2 1.2 0 0 0 .9-.469c.248-.323.248-.92.248-2.113"
    />
  </svg>
);
export default SvgRightIndent01;
