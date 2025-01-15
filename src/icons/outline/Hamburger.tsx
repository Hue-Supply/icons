import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHamburger = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.522 9.554.311-.709M12 6.965l.387.67M8.88 8.949l-.683.363M20 12.5v-1a8 8 0 1 0-16 0v1zm-15 4h14c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.052-.424-.052-.889-.052H5c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C3 13.803 3 14.036 3 14.5s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052m-1 0h16v1.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H6.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C4 19.361 4 18.941 4 18.1z"
    />
  </svg>
);
export default SvgHamburger;
