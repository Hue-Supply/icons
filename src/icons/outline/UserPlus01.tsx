import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserPlus01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M14.429 15H9.57A5.57 5.57 0 0 0 4 20.571V21m14.415-5.112v2.556m0 0V21m0-2.556h2.556m-2.556 0H15.86M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);
export default SvgUserPlus01;
