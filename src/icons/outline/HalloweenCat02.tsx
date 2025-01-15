import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenCat02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 15v5a2 2 0 1 1-4 0m0 0v-1.5M7 20v-2.5c0-2 1.79-3.5 4-3.5a4 4 0 0 1 4 4v2a2 2 0 1 0 4 0v-6.5M7 20a2 2 0 1 1-4 0v-9c0-4.418 3.806-8 8.5-8a8.9 8.9 0 0 1 3.5.708M3 11.5V4a2 2 0 1 1 4 0m8-1-.845 4.648c-.06.332-.09.498-.113.695a7 7 0 0 0-.037.528c-.005.198-.001.297.007.494C14.083 11.12 14.576 13 18 13s3.917-1.88 3.988-3.635c.008-.197.012-.296.007-.494a7 7 0 0 0-.037-.528 10 10 0 0 0-.113-.695L21 3l-2.5 3h-1z"
    />
  </svg>
);
export default SvgHalloweenCat02;
