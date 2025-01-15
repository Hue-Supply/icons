import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M12.135 5.09c-.046.051-.068.077-.092.085a.1.1 0 0 1-.067 0c-.025-.008-.047-.034-.092-.085-2.008-2.28-5.251-2.855-7.7-.702-2.502 2.199-2.854 5.875-.89 8.476 1.358 1.797 5.003 5.252 7.124 7.215.549.508.823.762 1.15.862.282.087.6.087.882 0 .327-.1.601-.354 1.15-.862 2.122-1.963 5.766-5.417 7.124-7.215 1.964-2.6 1.655-6.3-.89-8.476-2.49-2.13-5.693-1.577-7.7.702Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
