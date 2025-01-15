import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSettings01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.346 19.51.595 1.34a2.254 2.254 0 0 0 4.121 0l.596-1.34a2.47 2.47 0 0 1 2.516-1.45l1.457.155a2.253 2.253 0 0 0 2.49-2.36 2.25 2.25 0 0 0-.43-1.208l-.862-1.185A2.47 2.47 0 0 1 19.361 12c0-.523.165-1.033.473-1.456l.863-1.185a2.253 2.253 0 0 0-2.061-3.569l-1.457.155a2.48 2.48 0 0 1-1.498-.318 2.47 2.47 0 0 1-1.019-1.138l-.6-1.339a2.254 2.254 0 0 0-4.12 0l-.596 1.34a2.47 2.47 0 0 1-1.02 1.137 2.48 2.48 0 0 1-1.497.318L5.367 5.79a2.254 2.254 0 0 0-2.06 3.569l.863 1.185a2.475 2.475 0 0 1 0 2.912l-.863 1.185a2.253 2.253 0 0 0 2.06 3.569l1.457-.155a2.48 2.48 0 0 1 2.522 1.456"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.044 12a3.043 3.043 0 1 1-6.086 0 3.043 3.043 0 0 1 6.086 0"
    />
  </svg>
);
export default SvgSettings01;
