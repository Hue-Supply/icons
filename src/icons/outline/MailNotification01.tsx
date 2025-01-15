import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailNotification01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 13V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7M3.5 5.585l7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgMailNotification01;
