import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersGroup01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 21v-.429A5.57 5.57 0 0 0 14.429 15H9.57A5.57 5.57 0 0 0 4 20.571V21m18.034-4.848v-.269a3.494 3.494 0 0 0-3.494-3.494m.47-3.889a2.82 2.82 0 0 0-.45-4.361M2 16.152v-.269a3.494 3.494 0 0 1 3.494-3.494M5.024 8.5a2.82 2.82 0 0 1 .45-4.361M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsersGroup01;
