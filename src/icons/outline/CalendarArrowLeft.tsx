import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarArrowLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 25"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 2.04v4m8-4v4m-13 4h18m-5.741 5.976H8.777m0 0H8.74m.036 0q0 .031.025.055l2.98 2.661m-3.005-2.716q0-.031.025-.054l2.98-2.661M7.8 22.04h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.312C21 19.76 21 18.92 21 17.24v-8.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4.04 17.88 4.04 16.2 4.04H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.31C3 6.32 3 7.16 3 8.84v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328Z"
    />
  </svg>
);
export default SvgCalendarArrowLeft;
