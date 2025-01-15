import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersArrowLeft02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.013 21H4v-1.33a4.06 4.06 0 0 1 3.076-3.939c2.278-.57 4.63-.738 6.953-.505m7.003 3.397H15.36m0 0h-.032m.032 0q0 .028.022.048L17.99 21m-2.63-2.377q0-.026.022-.048l2.608-2.328M19 4c1.22.825 2 2.086 2 3.5s-.78 2.675-2 3.5m-2.5-3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsersArrowLeft02;
