import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStormOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.67 14.98a4 4 0 0 1-5.668-5.626m3.951-1.24a4.01 4.01 0 0 1 2.935 2.942m1.724 6.645A8 8 0 0 1 6.092 6.605m13.4 8.205A8 8 0 0 0 9.23 4.492m9.455 3.093c2.53 3.312 3.175 6.922 3.173 9.738m-16.54-.908c-2.631-3.443-3.224-7.208-3.17-10.068M2 2l20 20"
    />
  </svg>
);
export default SvgStormOff;
