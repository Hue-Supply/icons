import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaptop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 16H3.333C2.597 16 2 16.597 2 17.333A2.667 2.667 0 0 0 4.667 20H12.5m0-4H3V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 5.52 21 6.08 21 7.2v2.3M18.4 22h1.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-4.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.655C20.861 13 20.441 13 19.6 13h-1.2c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.655.655c-.164.32-.164.74-.164 1.581v4.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163"
    />
  </svg>
);
export default SvgLaptop02;
