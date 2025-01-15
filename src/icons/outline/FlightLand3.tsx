import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlightLand3 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m19.493 18.69.66-.66a1.5 1.5 0 0 0 .396-1.423l-1.9-7.646 2.06-2.06a2.5 2.5 0 1 0-3.536-3.536l-2.06 2.06-7.646-1.9a1.5 1.5 0 0 0-1.423.395l-.66.66M11.5 16.077l.77 2.963c.075.293.113.44.116.582a1.2 1.2 0 0 1-.176.648c-.075.121-.182.228-.396.442-.395.396-.593.593-.806.684a1.2 1.2 0 0 1-1.06-.057c-.202-.113-.377-.331-.728-.767l-2.564-3.187-3.187-2.565c-.436-.35-.654-.525-.767-.727a1.2 1.2 0 0 1-.057-1.06c.09-.213.288-.41.684-.806.214-.214.32-.321.442-.396a1.2 1.2 0 0 1 .648-.176c.143.003.29.04.582.117l2.963.769m8.115 3.445-1.32-3.136M8.123 7.99l3.1 1.324M2 2l20 20"
    />
  </svg>
);
export default SvgFlightLand3;
