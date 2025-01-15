import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGoogle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.838 12h18.324M12 4.7v14.6m-7.044-.544 13.524 1.6c.928.11 1.391.165 1.75.017a1.5 1.5 0 0 0 .744-.66c.188-.34.188-.806.188-1.74V6.027c0-.934 0-1.4-.188-1.74a1.5 1.5 0 0 0-.743-.66c-.36-.148-.823-.093-1.75.017l-13.525 1.6c-.75.09-1.124.133-1.407.308a1.5 1.5 0 0 0-.57.643c-.141.3-.141.678-.141 1.433v8.744c0 .755 0 1.132.14 1.433a1.5 1.5 0 0 0 .571.643c.283.175.657.219 1.407.308"
    />
  </svg>
);
export default SvgGoogle;
