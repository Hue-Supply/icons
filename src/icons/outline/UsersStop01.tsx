import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersStop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M3 21a1 1 0 1 0 2 0zm8.5-5a1 1 0 1 0 0-2zm8.06-13.163a1 1 0 0 0-1.12 1.657zm-.247 6.203a1 1 0 0 0 1.56 1.25zm-2.835 5.42a1 1 0 1 0-1.415 1.414zm3.252 6.08a1 1 0 1 0 1.414-1.414zM5 21v-.429H3V21zm4.571-7A6.57 6.57 0 0 0 3 20.571h2A4.57 4.57 0 0 1 9.571 16zm0 2H11.5v-2H9.571zM15.5 7.5A3.5 3.5 0 0 1 12 11v2a5.5 5.5 0 0 0 5.5-5.5zM12 11a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 12 13zM8.5 7.5A3.5 3.5 0 0 1 12 4V2a5.5 5.5 0 0 0-5.5 5.5zM12 4a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 2zm6.44.494c.997.674 1.56 1.648 1.56 2.671h2c0-1.804-.997-3.352-2.44-4.328zM20 7.165c0 .676-.242 1.32-.687 1.875l1.56 1.25C21.575 9.417 22 8.34 22 7.166zm.604 10.335a2.5 2.5 0 0 1-2.5 2.5v2a4.5 4.5 0 0 0 4.5-4.5zm-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-2a4.5 4.5 0 0 0 4.5 4.5zm-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5v-2a4.5 4.5 0 0 0-4.5 4.5zm2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h2a4.5 4.5 0 0 0-4.5-4.5zm-3.04.874 4.666 4.666 1.414-1.414-4.666-4.666z"
    />
  </svg>
);
export default SvgUsersStop01;
