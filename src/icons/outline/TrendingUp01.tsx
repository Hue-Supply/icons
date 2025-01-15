import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrendingUp01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.475 7.712 16.1 13.086c-.594.594-.891.891-1.234 1.003a1.5 1.5 0 0 1-.927 0c-.342-.112-.64-.409-1.233-1.003L11.28 11.66c-.634-.635-.952-.952-1.313-1.06a1.5 1.5 0 0 0-.969.035c-.352.135-.645.475-1.232 1.154l-4.291 4.974M17 7h5v5"
    />
  </svg>
);
export default SvgTrendingUp01;
