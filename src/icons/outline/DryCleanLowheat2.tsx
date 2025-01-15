import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDryCleanLowheat2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.5 7.339h-9.148c-3.37 0-6.547 1.579-8.582 4.266-1.343 1.773-.079 4.317 2.145 4.317H18.47c1.377 0 2.065 0 2.54-.285a2 2 0 0 0 .876-1.104c.17-.526.013-1.197-.3-2.538zm0 0-.423-1.818c-.206-.883-.309-1.325-.55-1.654a2 2 0 0 0-.83-.66c-.376-.16-.83-.16-1.737-.16H7M12 22v-2.63m-5.143 1.644L8.5 19.371m8.644 1.643L15.5 19.371"
    />
  </svg>
);
export default SvgDryCleanLowheat2;
