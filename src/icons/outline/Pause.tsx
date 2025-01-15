import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPause = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 6.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C5.139 4 5.559 4 6.4 4h1.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v11.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656C8.861 20 8.441 20 7.6 20H6.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C4 18.861 4 18.441 4 17.6zM14 6.4c0-.84 0-1.26.164-1.581a1.5 1.5 0 0 1 .655-.656C15.139 4 15.559 4 16.4 4h1.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v11.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163h-1.2c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.655-.656C14 18.861 14 18.441 14 17.6z"
    />
  </svg>
);
export default SvgPause;
