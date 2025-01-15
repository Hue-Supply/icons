import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 20v-4m0 4a9.99 9.99 0 0 0 8-4M12 2v4m0-4a9.99 9.99 0 0 1 8 4m-8 12h8m-8 0v-4m8 4a9.95 9.95 0 0 0 1.8-4M12 14h9.8M12 14v-4m9.8 4a10.1 10.1 0 0 0 0-4M12 10h9.8M12 10V6m9.8 4A9.95 9.95 0 0 0 20 6m-8 0h8"
    />
  </svg>
);
export default SvgBlur01;
