import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBread = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 6.333c0-.31 0-.464.011-.594A3 3 0 0 1 4.74 3.01C4.869 3 5.024 3 5.333 3h13.334c.31 0 .464 0 .595.011a3 3 0 0 1 2.727 2.728c.011.13.011.285.011.594V6.5A1.5 1.5 0 0 1 20.5 8v0a.5.5 0 0 0-.5.5v7.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 18.72 4 17.88 4 16.2V8.5a.5.5 0 0 0-.5-.5v0A1.5 1.5 0 0 1 2 6.5z"
    />
  </svg>
);
export default SvgBread;
