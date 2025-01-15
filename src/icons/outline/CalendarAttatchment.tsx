import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarAttatchment = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 11.5V8.84c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4.04 17.88 4.04 16.2 4.04H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.31C3 6.32 3 7.16 3 8.84v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328h4.7M8 2.04v4m8-4v4m-13 4h18m-1.862 9.112-3.063-3.063a1.438 1.438 0 1 1 2.033-2.033l3.052 3.051a2.899 2.899 0 0 1-4.1 4.1l-2.05-2.05"
    />
  </svg>
);
export default SvgCalendarAttatchment;
