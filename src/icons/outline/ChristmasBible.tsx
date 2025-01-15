import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasBible = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 18h11.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 2 17.441 2 16.6 2H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C5 3.139 5 3.559 5 4.4zm0 0c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C7.605 22 8.07 22 9 22h10m-7-7.75V8.433m0 0V5.75m0 2.683H9.5m2.5 0h2.5"
    />
  </svg>
);
export default SvgChristmasBible;
