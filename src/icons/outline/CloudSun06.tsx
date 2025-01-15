import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSun06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.106 7.345a3.502 3.502 0 0 0-6.61 0M10 2.5V1M3.922 7.694h-1.5m15.156 0h-1.656m-.563-4.474-1.17 1.17M4.64 3.22l1.17 1.17m11.714 9.147h.743a3.732 3.732 0 0 1 0 7.464H7.5a5.5 5.5 0 1 1 0-11h4.513a6 6 0 0 1 1.922.315l.168.056a5.64 5.64 0 0 1 3.387 3.142q.01.022.035.023"
    />
  </svg>
);
export default SvgCloudSun06;
