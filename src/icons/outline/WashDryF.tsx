import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashDryF = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.67 7.254h-4.54c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219c-.055.106-.055.247-.055.527V12m0 0v4.747m0-4.747h4.747M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgWashDryF;
