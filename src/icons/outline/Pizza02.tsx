import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPizza02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.796 6.112c1.594.5 3.801 1.98 5.9 4.08 2.205 2.205 3.728 4.528 4.149 6.136m-6.506-1.116-.007.006M7.084 16.96l-.006.007m2.248-5.987-.006.007M3.05 17.919l4.77-13.207c.36-1 .541-1.5.952-1.847a2.23 2.23 0 0 1 1.287-.47c.537 0 .926.225 1.704.675 1.729.998 3.507 2.36 5.178 4.032 1.67 1.67 3.032 3.448 4.031 5.175.45.779.675 1.168.675 1.705 0 .42-.2.966-.47 1.287-.346.41-.846.591-1.847.953l-13.207 4.77c-1.535.553-2.302.83-2.803.657a1.5 1.5 0 0 1-.928-.928c-.173-.5.104-1.268.658-2.802m7.966-2.385a.456.456 0 1 0 .644-.644.456.456 0 0 0-.644.644M6.76 17.282a.455.455 0 1 0 .644-.644.455.455 0 0 0-.644.644m2.242-5.98a.455.455 0 1 0 .644-.644.455.455 0 0 0-.644.644"
    />
  </svg>
);
export default SvgPizza02;
