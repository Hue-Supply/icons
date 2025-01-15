import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareCheck02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 11.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.223.114.47.188.767.236.487.08.731.119.865.176.387.165.595.409.695.818.035.14.035.325.035.694 0 .573 0 .86.07 1.056a1.2 1.2 0 0 0 1.252.789c.207-.022.466-.145.982-.392L11.5 20m3.11-2.285 1.754 1.845a.514.514 0 0 0 .753 0L21 15.475"
    />
  </svg>
);
export default SvgMessageSquareCheck02;
