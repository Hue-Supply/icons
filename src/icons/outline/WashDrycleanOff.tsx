import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashDrycleanOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.859 5A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 6.844-2.709M8.869 2.5A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10 0 1.045-.16 2.053-.458 3M2 2l20 20"
    />
  </svg>
);
export default SvgWashDrycleanOff;
