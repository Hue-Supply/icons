import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChartUp03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3 17 4.193-4.559a2.883 2.883 0 0 1 4.237-.007 2.883 2.883 0 0 0 4.154.079l4.986-4.986M21 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V3"
    />
  </svg>
);
export default SvgLineChartUp03;
