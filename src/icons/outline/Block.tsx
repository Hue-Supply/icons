import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlock = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 9h3m0 0h3M5 9v6m3-6h4M8 9V3m4 6h4m-4 0v6m4-6h3m-3 0V3m3 6h3m-3 0v6M2 15h3m0 0h3m0 0h4m-4 0v6m4-6h4m0 0h3m-3 0v6m3-6h3M4.4 21h15.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 3 20.441 3 19.6 3H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 4.139 2 4.559 2 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163"
    />
  </svg>
);
export default SvgBlock;
