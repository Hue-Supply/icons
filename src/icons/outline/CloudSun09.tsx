import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSun09 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.713 10.454A6.5 6.5 0 0 0 9.448 6.158m8.077 7.378h.743a3.732 3.732 0 0 1 0 7.464H7.5a5.5 5.5 0 1 1 0-11h4.513c.654 0 1.303.106 1.922.315l.168.056a5.64 5.64 0 0 1 3.387 3.142q.01.022.035.023"
    />
  </svg>
);
export default SvgCloudSun09;
