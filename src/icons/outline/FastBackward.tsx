import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFastBackward = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 9.987c0-1.713 0-2.57-.357-3.037a1.74 1.74 0 0 0-1.295-.681c-.587-.03-1.293.456-2.705 1.427L15.467 9.19c-1.119.77-1.678 1.154-1.874 1.636-.172.42-.172.892 0 1.313.196.481.755.866 1.874 1.635l2.176 1.496c1.412.97 2.118 1.456 2.705 1.427a1.74 1.74 0 0 0 1.296-.682C22 15.55 22 14.693 22 12.98zM10.536 9.987c0-1.713 0-2.57-.356-3.037a1.74 1.74 0 0 0-1.296-.681c-.587-.03-1.293.456-2.705 1.427L4.004 9.19c-1.12.77-1.679 1.154-1.875 1.636-.172.42-.172.892 0 1.313.196.481.756.866 1.875 1.635l2.175 1.496c1.412.97 2.118 1.456 2.705 1.427a1.74 1.74 0 0 0 1.296-.682c.356-.467.356-1.323.356-3.037z"
    />
  </svg>
);
export default SvgFastBackward;
