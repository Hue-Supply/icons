import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAirplay = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19 18c.768 0 1.47-.289 2-.764.614-.55 1-1.348 1-2.236V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9c0 .889.386 1.687 1 2.236A3 3 0 0 0 5 18m6.432 4h1.56c1.603 0 2.404 0 2.815-.328a1.5 1.5 0 0 0 .563-1.176c-.001-.526-.503-1.15-1.507-2.4l-.731-.91c-.605-.753-.908-1.13-1.277-1.275a1.5 1.5 0 0 0-1.015-.031c-.378.122-.703.48-1.353 1.194l-.83.91c-1.157 1.27-1.736 1.906-1.76 2.447a1.5 1.5 0 0 0 .54 1.223C8.853 22 9.713 22 11.432 22"
    />
  </svg>
);
export default SvgAirplay;
