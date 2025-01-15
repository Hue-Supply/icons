import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWifiOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 19.5h.01M22 8.7c-2.634-2.608-6.145-4.2-10-4.2a14 14 0 0 0-2.5.227m-.965 11.085C9.485 14.99 10.689 14.5 12 14.5c.652 0 1.87 0 3.142.9m-9.868-3.157a9.95 9.95 0 0 1 4.07-2.365M2 8.701a14.9 14.9 0 0 1 3.446-2.552M14 9.712c1.789.385 3.408 1.277 4.726 2.531M1.75 2l20 20"
    />
  </svg>
);
export default SvgWifiOff;
