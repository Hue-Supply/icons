import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShip = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15 17.418 2.786-1.781c.809-.517 1.213-.776 1.506-1.123a3 3 0 0 0 .573-1.047c.135-.434.135-.914.135-1.874v-.972c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H6.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C4 9.36 4 9.78 4 10.62v.973c0 .96 0 1.44.134 1.874a3 3 0 0 0 .574 1.047c.293.347.697.606 1.506 1.123L9 17.418m-6 .803s2.7-1 4.5-1 2.7 1 4.5 1 2.7-1 4.5-1 4.5 1 4.5 1M3 22s2.7-1 4.5-1 2.7 1 4.5 1 2.7-1 4.5-1 4.5 1 4.5 1M17 8.22v-3.6c0-.84 0-1.26-.163-1.58a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H9.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C7 3.36 7 3.78 7 4.62v3.601z"
    />
  </svg>
);
export default SvgShip;
