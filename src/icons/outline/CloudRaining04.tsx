import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.79 19.434v2.709m4.21-2.71v2.71m4.21-2.71v2.71M6.28 7.439h.183c.02 0 .037-.016.037-.037A5.4 5.4 0 0 1 11.894 2h.212A5.4 5.4 0 0 1 17.5 7.402c0 .02.017.037.037.037h.183a4.28 4.28 0 0 1 0 8.561H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudRaining04;
