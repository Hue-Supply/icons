import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudMoon01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.4 11.965A5 5 0 0 0 22 8.929 5 5 0 0 1 16.8 2a5 5 0 0 0-4.4 4.964m-6.426 6.087h.488c.02 0 .037-.017.037-.037A5.013 5.013 0 0 1 11.51 8h.98a5.013 5.013 0 0 1 5.01 5.014c0 .02.017.037.037.037h.488a3.975 3.975 0 0 1 0 7.949H5.975a3.975 3.975 0 0 1 0-7.95M4 2l.54 1.46L6 4l-1.46.54L4 6l-.54-1.46L2 4l1.46-.54z"
    />
  </svg>
);
export default SvgCloudMoon01;
