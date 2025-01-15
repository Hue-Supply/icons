import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightbulb04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.857 16.684v2.459c0 .798 0 1.197-.112 1.518a2 2 0 0 1-1.227 1.227C13.197 22 12.798 22 12 22s-1.197 0-1.518-.112a2 2 0 0 1-1.227-1.227c-.112-.321-.112-.72-.112-1.518v-2.459m5.714 0A7.622 7.622 0 0 0 12 2a7.619 7.619 0 0 0-2.857 14.684m5.714 0H9.143M12 13.27V10.73m0 0h2.857m-2.857 0H9.143"
    />
  </svg>
);
export default SvgLightbulb04;
