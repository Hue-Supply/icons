import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCornerRadius = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.084 16.542v.182c0 1.526 0 2.29-.297 2.872-.261.513-.678.93-1.191 1.191-.583.297-1.346.297-2.872.297h-.182M2.916 7.458v-.182c0-1.526 0-2.289.297-2.872.261-.513.678-.93 1.191-1.191.583-.297 1.346-.297 2.872-.297h.182M2.916 16.542v.182c0 1.526 0 2.29.297 2.872.261.513.678.93 1.191 1.191.583.297 1.346.297 2.872.297h.182M21.084 7.458v-.182c0-1.526 0-2.289-.297-2.872a2.73 2.73 0 0 0-1.191-1.191c-.583-.297-1.346-.297-2.872-.297h-.182"
    />
  </svg>
);
export default SvgCornerRadius;
