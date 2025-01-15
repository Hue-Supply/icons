import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUndoSmall = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.552 6H14a6 6 0 0 1 0 12H5m1.338-9.924L4.244 5.927l2.149-2.093"
    />
  </svg>
);
export default SvgUndoSmall;
