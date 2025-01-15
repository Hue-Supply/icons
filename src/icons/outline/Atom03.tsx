import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAtom03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.243 4.277c3.07-1.56 6.015-1.721 7.608-.129 2.396 2.397.824 7.855-3.513 12.19q-.325.326-.658.63m-3.735 2.657c-3.137 1.651-6.171 1.852-7.797.226-2.396-2.396-.823-7.854 3.513-12.19q.351-.351.71-.678m11.48 12.868c-2.396 2.397-7.854.824-12.19-3.512S1.75 6.545 4.148 4.149c2.396-2.397 7.854-.824 12.19 3.512 4.337 4.336 5.91 9.794 3.513 12.19M13.001 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgAtom03;
