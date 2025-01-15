import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersCheck01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M14.429 16a1 1 0 1 0 0-2zM3 21a1 1 0 1 0 2 0zM19.56 3.172a1 1 0 0 0-1.12 1.656zm-1.12 7a1 1 0 0 0 1.12 1.656zm-3.314 7.802a1 1 0 1 0-1.498 1.325zm1.172 2.833-.749.663zm.825 0 .749.663zm5.003-4.144a1 1 0 1 0-1.498-1.326zM9.57 16h4.858v-2H9.57zM5 21v-.429H3V21zm4.571-7A6.57 6.57 0 0 0 3 20.571h2A4.57 4.57 0 0 1 9.571 16zM15.5 7.5A3.5 3.5 0 0 1 12 11v2a5.5 5.5 0 0 0 5.5-5.5zM12 11a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 12 13zM8.5 7.5A3.5 3.5 0 0 1 12 4V2a5.5 5.5 0 0 0-5.5 5.5zM12 4a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 2zm6.44.828C19.437 5.503 20 6.477 20 7.5h2c0-1.804-.997-3.353-2.44-4.328zM20 7.5c0 1.023-.563 1.997-1.56 2.672l1.12 1.656C21.003 10.853 22 9.304 22 7.5zm-6.372 11.8 1.921 2.17 1.498-1.326-1.921-2.17zm4.244 2.17 4.254-4.807-1.498-1.326-4.254 4.807zm-2.323 0a1.537 1.537 0 0 0 2.323 0l-1.498-1.326A.45.45 0 0 1 16.71 20c.147 0 .267.066.337.144z"
    />
  </svg>
);
export default SvgUsersCheck01;
