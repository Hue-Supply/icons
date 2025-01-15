import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCompass01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.725 8.263 11.017 9.5c-.417.14-.626.209-.8.327a1.5 1.5 0 0 0-.39.392c-.12.173-.189.382-.328.799l-1.236 3.708c-.163.488-.244.732-.186.895a.5.5 0 0 0 .303.303c.162.058.407-.024.895-.186l3.708-1.236c.417-.14.626-.209.8-.327a1.5 1.5 0 0 0 .39-.392c.12-.173.189-.382.328-.8l1.236-3.707c.162-.488.244-.733.186-.895a.5.5 0 0 0-.303-.303c-.162-.058-.407.023-.895.186"
    />
  </svg>
);
export default SvgCompass01;
