import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTranslate = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m22 21-1.818-4m0 0-2.454-5.398c-.23-.509-.347-.763-.507-.842a.5.5 0 0 0-.442 0c-.16.079-.276.333-.507.842L13.818 17m6.364 0h-6.364m0 0L12 21M2 6h8m0 0h3m-3 0c0 3.333-1.6 10-8 10M7 3h1m-3 8 5 5"
    />
  </svg>
);
export default SvgTranslate;
