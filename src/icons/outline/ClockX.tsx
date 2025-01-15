import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M13.099 22.946a1 1 0 1 0-.198-1.99zM20.956 12.9a1 1 0 0 0 1.99.198zM13 6.5a1 1 0 1 0-2 0zM12 12h-1a1 1 0 0 0 .293.707zm2.293 3.707a1 1 0 0 0 1.414-1.414zm3.613.785a1 1 0 0 0-1.414 1.414zm3.387 6.215a1 1 0 0 0 1.414-1.414zm1.414-4.8a1 1 0 0 0-1.414-1.415zm-6.215 3.386a1 1 0 0 0 1.414 1.414zM12 21a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zm.901 17.956Q12.457 21 12 21v2q.555 0 1.099-.054zM21 12q0 .457-.044.901l1.99.198Q23 12.556 23 12zM11 6.5V12h2V6.5zm.293 6.207 3 3 1.414-1.414-3-3zm5.199 5.2 2.4 2.4 1.415-1.415-2.4-2.4zm2.4 2.4 2.4 2.4 1.415-1.414-2.4-2.4zm2.4-3.815-2.4 2.4 1.415 1.415 2.4-2.4zm-2.4 2.4-2.4 2.4 1.414 1.415 2.4-2.4z"
    />
  </svg>
);
export default SvgClockX;
