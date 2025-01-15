import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilePlay = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.032 11.9v-.11c0-1.272 0-1.908.268-2.294a1.5 1.5 0 0 1 1.001-.627c.464-.072 1.037.207 2.18.763l.097.047c1.25.608 1.876.912 2.105 1.348.2.38.227.827.075 1.228-.174.46-.757.839-1.924 1.596l-.096.062c-1.207.783-1.81 1.174-2.309 1.14a1.5 1.5 0 0 1-1.097-.596c-.3-.4-.3-1.12-.3-2.557Z"
    />
  </svg>
);
export default SvgFilePlay;
