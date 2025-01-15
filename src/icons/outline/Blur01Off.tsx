import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur01Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22C6.477 22 2 17.523 2 12c0-2.567.967-4.908 2.557-6.678l.26-.256M12 22a9.96 9.96 0 0 0 6.71-2.586l.214-.24M12 22v-4m0-16a10 10 0 0 0-4 .832M12 2a9.99 9.99 0 0 1 8 4m-8-4v4m9.168 10q.417-.954.632-2M12 12.25 4.816 5.066M12 12.25l6.924 6.924M12 12.25V18m0-11.459V6m0 12h1.236M19 14h2.8m0 0a10.1 10.1 0 0 0 0-4m-6.13 0h6.13m0 0A9.95 9.95 0 0 0 20 6m-8 0h8M1.75 2l3.066 3.066M21.75 22l-2.826-2.826"
    />
  </svg>
);
export default SvgBlur01Off;
