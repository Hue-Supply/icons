import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpeaker03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 2 8.12 2 9.8 2h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 4.28 19 5.12 19 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M14.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </svg>
);
export default SvgSpeaker03;
