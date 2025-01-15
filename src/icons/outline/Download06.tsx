import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m12 22-4.269-4.27m4.27 4.27 4.269-4.27M12 22V8.521M21.168 16A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.422.297 2.775.832 4"
    />
  </svg>
);
export default SvgDownload06;
