import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartSquare05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 11.5v5m4-9v9m4-3v3M19.623 2v5.673m0 0v.031m0-.031a.06.06 0 0 1-.048-.023l-2.328-2.608m2.376 2.63a.06.06 0 0 0 .048-.022L22 5.042M21 12.5v3.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3H13"
    />
  </svg>
);
export default SvgBarChartSquare05;
