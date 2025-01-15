import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAbsolute = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 8v4m0 0v4m0-4h4m-4 0H8m13.084 4.542v.182c0 1.526 0 2.29-.297 2.872-.261.513-.678.93-1.191 1.191-.583.297-1.346.297-2.872.297h-.182M2.916 7.458v-.182c0-1.526 0-2.289.297-2.872.261-.513.678-.93 1.191-1.191.583-.297 1.346-.297 2.872-.297h.182M2.916 16.542v.182c0 1.526 0 2.29.297 2.872.261.513.678.93 1.191 1.191.583.297 1.346.297 2.872.297h.182M21.084 7.458v-.182c0-1.526 0-2.289-.297-2.872a2.73 2.73 0 0 0-1.191-1.191c-.583-.297-1.346-.297-2.872-.297h-.182"
    />
  </svg>
);
export default SvgAbsolute;
