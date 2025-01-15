import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersPlus01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M14.429 16a1 1 0 1 0 0-2zM3 21a1 1 0 1 0 2 0zm16.415-5.112a1 1 0 1 0-2 0zm-2 5.112a1 1 0 1 0 2 0zm3.556-1.556a1 1 0 1 0 0-2zm-5.112-2a1 1 0 1 0 0 2zM19.56 3.172a1 1 0 0 0-1.12 1.656zm-1.12 7a1 1 0 0 0 1.12 1.656zM9.57 16h4.858v-2H9.57zM5 21v-.429H3V21zm4.571-7A6.57 6.57 0 0 0 3 20.571h2A4.57 4.57 0 0 1 9.571 16zM15.5 7.5A3.5 3.5 0 0 1 12 11v2a5.5 5.5 0 0 0 5.5-5.5zM12 11a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 12 13zM8.5 7.5A3.5 3.5 0 0 1 12 4V2a5.5 5.5 0 0 0-5.5 5.5zM12 4a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 2zm5.415 11.888v2.556h2v-2.556zm0 2.556V21h2v-2.556zm3.556-1h-2.556v2h2.556zm-2.556 0H15.86v2h2.556zm.025-12.616C19.437 5.503 20 6.477 20 7.5h2c0-1.804-.997-3.353-2.44-4.328zM20 7.5c0 1.023-.563 1.997-1.56 2.672l1.12 1.656C21.003 10.853 22 9.304 22 7.5z"
    />
  </svg>
);
export default SvgUsersPlus01;
