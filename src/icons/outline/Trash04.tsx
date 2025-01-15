import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 6h18m-11 5.632v4.736m4-4.736v4.736M5 6h14v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2zm11 0H8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.606 2 11.07 2 12 2s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 4.605 16 5.07 16 6"
    />
  </svg>
);
export default SvgTrash04;
