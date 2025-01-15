import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBleach1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.092 20.661 7.63-13.216m-1.558 13.294 4.82-8.35M4.968 21.002h14.068c1.395 0 2.092 0 2.495-.293.352-.256.578-.648.624-1.08.052-.496-.297-1.1-.994-2.308L14.126 5.139c-.697-1.207-1.046-1.811-1.501-2.014a1.53 1.53 0 0 0-1.247 0c-.456.203-.804.807-1.501 2.014L2.843 17.322c-.698 1.208-1.046 1.812-.994 2.308.045.432.272.824.624 1.08.403.293 1.1.293 2.494.293"
    />
  </svg>
);
export default SvgBleach1;
