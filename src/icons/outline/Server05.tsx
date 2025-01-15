import * as React from 'react';
import type { SVGProps } from 'react';
const SvgServer05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.5 8.667h19m-19 6.666h19M5.487 18.67h3.637m9.365 0h.01M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18V6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 2 19.4 2 18 2H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22"
    />
  </svg>
);
export default SvgServer05;
