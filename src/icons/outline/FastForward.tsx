import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFastForward = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 9.987c0-1.713 0-2.57.356-3.037.311-.407.785-.656 1.296-.681.587-.03 1.293.456 2.705 1.427L8.533 9.19c1.119.77 1.678 1.154 1.874 1.636.172.42.172.892 0 1.313-.196.481-.755.866-1.874 1.635l-2.176 1.496c-1.412.97-2.118 1.456-2.705 1.427a1.74 1.74 0 0 1-1.296-.682C2 15.55 2 14.693 2 12.98zM13.464 9.987c0-1.713 0-2.57.356-3.037.31-.407.785-.656 1.296-.681.587-.03 1.293.456 2.705 1.427l2.175 1.495c1.12.77 1.679 1.154 1.875 1.636.172.42.172.892 0 1.313-.196.481-.756.866-1.875 1.635l-2.175 1.496c-1.412.97-2.118 1.456-2.705 1.427a1.74 1.74 0 0 1-1.296-.682c-.356-.467-.356-1.323-.356-3.037z"
    />
  </svg>
);
export default SvgFastForward;
