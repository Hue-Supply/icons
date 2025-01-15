import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarouselHorizontal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 17c-.465 0-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C20 15.697 20 15.464 20 15V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C21.303 7 21.536 7 22 7M2 17c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C4 15.697 4 15.464 4 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C2.696 7 2.464 7 2 7m8.2 12h3.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C17 17.48 17 16.92 17 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 5 14.92 5 13.8 5h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 6.52 7 7.08 7 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 19 9.08 19 10.2 19"
    />
  </svg>
);
export default SvgCarouselHorizontal;
