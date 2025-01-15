import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaperclip = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m16.26 6.528-7.896 7.896a1.833 1.833 0 1 0 2.593 2.592l7.778-7.778a3.667 3.667 0 0 0-5.186-5.185l-7.66 7.66a5.5 5.5 0 0 0 7.778 7.778l5.304-5.303"
    />
  </svg>
);
export default SvgPaperclip;
