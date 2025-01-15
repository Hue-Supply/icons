import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCompass02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-1.5M12 22C6.477 22 2 17.523 2 12m10 10v-1.5M2 12C2 6.477 6.477 2 12 2M2 12h1.5M12 2v1.5m7.071 15.571-1.06-1.06M5.99 5.99 4.929 4.929m14.142 0-1.06 1.06M5.99 18.01l-1.061 1.061M11.017 9.5l3.708-1.236c.488-.163.733-.244.895-.186a.5.5 0 0 1 .303.303c.058.162-.024.407-.186.895L14.5 12.983c-.14.417-.209.626-.327.8a1.5 1.5 0 0 1-.392.39c-.173.119-.382.189-.8.328l-3.707 1.236c-.488.162-.733.244-.895.186a.5.5 0 0 1-.303-.303c-.058-.162.023-.407.186-.895L9.5 11.017c.14-.417.209-.626.327-.8a1.5 1.5 0 0 1 .392-.39c.173-.12.382-.189.8-.328"
    />
  </svg>
);
export default SvgCompass02;
