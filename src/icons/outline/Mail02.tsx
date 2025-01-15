import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMail02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3.5 5.585 7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585M21.5 18l-7-6m-5 0-7 6M5 20h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgMail02;
