import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBook04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 20h7.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V6.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 4 20.441 4 19.6 4h-1.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C12 7.04 12 8.16 12 10.4m0 9.6v-9.6m0 9.6H4.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 18.861 2 18.441 2 17.6V6.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C3.139 4 3.559 4 4.4 4h1.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C12 7.04 12 8.16 12 10.4"
    />
  </svg>
);
export default SvgBook04;
