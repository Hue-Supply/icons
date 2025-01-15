import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.158 11.5V21H4.842v-9.5M3 21h18m-6.6 0v-3.811c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.58V21zM15 8a3 3 0 1 1-6 0 3 3 0 0 1-6 0c0-.645.234-1.267.659-1.753L6.5 3H18l2.4 3.2A3 3 0 1 1 15 8"
    />
  </svg>
);
export default SvgShop01;
