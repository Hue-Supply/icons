import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBeerOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.5 3H17a1.5 1.5 0 0 1 1.5 1.5v2.386a12 12 0 0 1-.723 4.1l-.277.764M5.5 5v1.886a12 12 0 0 0 .722 4.1l.556 1.527a12 12 0 0 1 .722 4.101V19.5A1.5 1.5 0 0 0 9 21h6a1.5 1.5 0 0 0 1.5-1.5v-2.886q0-.376.023-.748m-1.787-6.848c2.23.12 3.345-.352 3.345-.352M2.5 1.696l20 20"
    />
  </svg>
);
export default SvgBeerOff;
