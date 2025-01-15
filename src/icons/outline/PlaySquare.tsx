import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlaySquare = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.95 10.793c0-1.383 0-2.074.288-2.451.25-.328.633-.53 1.045-.55.474-.024 1.044.368 2.183 1.151l1.756 1.207c.903.621 1.354.932 1.513 1.32.138.34.138.72 0 1.06-.159.388-.61.699-1.513 1.32l-1.756 1.207c-1.14.783-1.709 1.175-2.183 1.151a1.4 1.4 0 0 1-1.045-.55c-.288-.377-.288-1.068-.288-2.45z"
    />
  </svg>
);
export default SvgPlaySquare;
