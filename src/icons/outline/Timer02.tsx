import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimer02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 8.133v4.92l2.684 2.684M12 2.037V4m8.947 9.053a8.947 8.947 0 1 1-17.894 0 8.947 8.947 0 0 1 17.894 0"
    />
  </svg>
);
export default SvgTimer02;
