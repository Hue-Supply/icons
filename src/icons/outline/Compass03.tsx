import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCompass03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-1.5M12 22C6.477 22 2 17.523 2 12m10 10v-1.5M2 12C2 6.477 6.477 2 12 2M2 12h1.5M12 2v1.5m7.071 15.571-1.06-1.06M5.99 5.99 4.929 4.929m14.142 0-1.06 1.06M5.99 18.01l-1.061 1.061M8.074 12 12 8.074 15.926 12 12 15.926z"
    />
  </svg>
);
export default SvgCompass03;
