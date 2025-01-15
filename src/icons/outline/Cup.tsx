import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCup = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 9.374h14L17 22H7zM3.7 7.371c0-.467 0-.7.05-.892A1.5 1.5 0 0 1 4.81 5.42c.192-.051.425-.051.893-.051h12.596c.468 0 .701 0 .893.051a1.5 1.5 0 0 1 1.058 1.059c.052.191.052.425.052.892 0 .468 0 .702-.052.893a1.5 1.5 0 0 1-1.058 1.058c-.192.052-.425.052-.893.052H5.702c-.468 0-.701 0-.893-.052a1.5 1.5 0 0 1-1.058-1.058c-.052-.191-.052-.425-.052-.893M5.596 5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.116 2 7.676 2 8.796 2h6.41c1.12 0 1.68 0 2.107.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v.169H5.595z"
    />
  </svg>
);
export default SvgCup;
