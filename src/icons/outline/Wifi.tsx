import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWifi = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 19.5h.01M22 8.7c-2.634-2.608-6.145-4.2-10-4.2S4.634 6.092 2 8.7m3.274 3.543C7.068 10.536 9.422 9.5 12 9.5s4.932 1.036 6.726 2.743m-3.304 3.532A5.27 5.27 0 0 0 12 14.5c-1.31 0-2.515.49-3.465 1.312"
    />
  </svg>
);
export default SvgWifi;
