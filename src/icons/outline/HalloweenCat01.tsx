import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenCat01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.5 12.5V22H4a2 2 0 1 1 0-4h1c0-4.97 3.582-9 8-9m2 13v-5.5M11 22l-1-6.5M14 3l-.845 4.648c-.06.332-.09.498-.113.695a7 7 0 0 0-.037.528c-.005.198-.001.297.007.494C13.083 11.12 13.576 13 17 13s3.917-1.88 3.988-3.635c.008-.197.012-.296.007-.494a7 7 0 0 0-.037-.528 10 10 0 0 0-.113-.695L20 3l-2.5 3h-1z"
    />
  </svg>
);
export default SvgHalloweenCat01;
