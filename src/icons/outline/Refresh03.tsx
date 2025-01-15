import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.977 4a8 8 0 0 1 5 14.245M12.3 6.183l-2.006-2.231 2.232-2.005m-.568 17.46A7.958 7.958 0 0 1 6.331 5.821m4.736 11.41 1.874 2.323-2.323 1.875"
    />
  </svg>
);
export default SvgRefresh03;
