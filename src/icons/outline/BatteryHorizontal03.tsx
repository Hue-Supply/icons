import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryHorizontal03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 2h4m-4 15.5h4m4-.3V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 5 14.88 5 13.2 5h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 7.28 6 8.12 6 9.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.28 22 9.12 22 10.8 22h2.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 19.72 18 18.88 18 17.2"
    />
  </svg>
);
export default SvgBatteryHorizontal03;
