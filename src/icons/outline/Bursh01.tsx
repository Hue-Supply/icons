import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBursh01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.384 9.098q-.274.376-.525.77l-.98 1.536q-.273.43-.503.88l-.173.363m2.18-3.55a15 15 0 0 1 2.33-2.527l.085-.075a14.64 14.64 0 0 1 7.83-3.45.296.296 0 0 1 .33.328 14.64 14.64 0 0 1-3.451 7.83l-.075.087a15 15 0 0 1-2.551 2.346m-4.498-4.538s1.294.363 2.749 1.818c1.454 1.454 1.749 2.72 1.749 2.72m0 0q-.366.265-.747.508l-1.536.979q-.357.227-.73.425l-.52.204m-3.145-3.105a3.98 3.98 0 0 0-3.376 1.141c-1.538 1.539-2.383 5.974-1.485 6.871s5.333.054 6.871-1.485a3.98 3.98 0 0 0 1.135-3.422m-3.145-3.105a3.71 3.71 0 0 1 3.145 3.105"
    />
  </svg>
);
export default SvgBursh01;
