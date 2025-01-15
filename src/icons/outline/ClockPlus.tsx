import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockPlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M13.099 22.946a1 1 0 1 0-.198-1.99zM20.956 12.9a1 1 0 0 0 1.99.198zM13 6.5a1 1 0 1 0-2 0zM12 12h-1a1 1 0 0 0 .293.707zm2.293 3.707a1 1 0 0 0 1.414-1.414zm5.312-.026a1 1 0 1 0-2 0zm-2 5.849a1 1 0 1 0 2 0zm3.924-1.925a1 1 0 1 0 0-2zm-5.848-2a1 1 0 1 0 0 2zM12 21a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zm.901 17.956Q12.457 21 12 21v2q.555 0 1.099-.054zM21 12q0 .457-.044.901l1.99.198Q23 12.556 23 12zM11 6.5V12h2V6.5zm.293 6.207 3 3 1.414-1.414-3-3zm6.312 2.974v2.924h2v-2.924zm0 2.924v2.924h2v-2.924zm3.924-1h-2.924v2h2.924zm-2.924 0h-2.924v2h2.924z"
    />
  </svg>
);
export default SvgClockPlus;
