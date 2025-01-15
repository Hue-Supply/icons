import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlightLand2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m11.224 9.314-3.26 3.227-2.963-.77c-.293-.075-.44-.113-.582-.116a1.2 1.2 0 0 0-.648.176c-.121.075-.228.182-.442.396-.396.395-.593.593-.684.806a1.2 1.2 0 0 0 .057 1.06c.113.202.331.377.767.727l3.187 2.565 2.564 3.187c.351.436.526.654.728.767a1.2 1.2 0 0 0 1.06.057c.213-.09.41-.288.806-.684.214-.214.321-.321.396-.442a1.2 1.2 0 0 0 .176-.648c-.003-.143-.04-.29-.117-.582l-.77-2.963 3.26-3.227 2.294 5.368a1.5 1.5 0 0 0 2.44.472l.66-.66a1.5 1.5 0 0 0 .396-1.423l-1.9-7.646 2.06-2.06a2.5 2.5 0 1 0-3.536-3.536l-2.06 2.06-7.646-1.9a1.5 1.5 0 0 0-1.423.395l-.66.66a1.5 1.5 0 0 0 .47 2.44z"
    />
  </svg>
);
export default SvgFlightLand2;
