import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChartDown02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V3m0 7h8.5l8 5.5M13 10.238a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 5.262a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default SvgLineChartDown02;
