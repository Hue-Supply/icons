import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining01Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.61 15.065a4.28 4.28 0 0 1 2.67-7.626h.183c.02 0 .037-.016.037-.037A5.4 5.4 0 0 1 11.894 2h.212A5.4 5.4 0 0 1 17.5 7.402c0 .02.017.037.037.037h.183a4.28 4.28 0 0 1 2.67 7.626m-7.773-1.697L10.178 22m6.523-8.632-1.865 6.6m-6.303-6.6-1.865 6.6"
    />
  </svg>
);
export default SvgCloudRaining01Alt;
