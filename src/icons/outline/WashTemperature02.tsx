import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashTemperature02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m22 5-2.02 10.138c-.275 1.376-.412 2.064-.771 2.578a3 3 0 0 1-1.259 1.033c-.575.251-1.276.251-2.678.251H8.394c-1.445 0-2.168 0-2.754-.263a3 3 0 0 1-1.27-1.077c-.356-.535-.474-1.248-.711-2.673L2 5m7.912 8.429h.015m4.147 0h.015m7.218-5.141-.56-.265c-1.248-.59-3.099-.621-4.416-.077-1.25.517-2.99.517-4.24 0l-.074-.03c-1.293-.535-3.095-.535-4.388 0s-3.094.535-4.387 0l-.549-.227"
    />
  </svg>
);
export default SvgWashTemperature02;
