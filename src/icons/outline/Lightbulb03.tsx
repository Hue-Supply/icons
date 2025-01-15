import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightbulb03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2v1.5M1.17 12h1.5m18.581 0h1.5M4.488 4.704l1.119 1.119m14.021-1.12-1.119 1.12M6 12.714C6 9.558 8.686 7 12 7s6 2.558 6 5.714c0 1.832-.904 3.462-2.311 4.507-.669.497-1.003.746-1.131.914a1.2 1.2 0 0 0-.25.496c-.058.203-.058.478-.058 1.03v.419c0 .672 0 1.008-.13 1.265a1.2 1.2 0 0 1-.525.524c-.257.131-.593.131-1.265.131h-.66c-.672 0-1.008 0-1.265-.13a1.2 1.2 0 0 1-.524-.525c-.13-.257-.13-.593-.13-1.265v-.42c0-.55 0-.826-.059-1.029a1.2 1.2 0 0 0-.25-.496c-.128-.168-.462-.417-1.13-.914C6.905 16.176 6 14.546 6 12.715"
    />
  </svg>
);
export default SvgLightbulb03;
