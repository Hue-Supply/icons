import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenDown = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m12 15.5-4.27-4.268M12 15.5l4.269-4.27m-4.27 4.27V2.5M18 4a9.99 9.99 0 0 1 4 8c0 5.524-4.477 10-10 10S2 17.525 2 12a9.99 9.99 0 0 1 4-8"
    />
  </svg>
);
export default SvgArrowCircleFBrokenDown;
