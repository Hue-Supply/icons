import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudFog02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 21h14M6.28 8.44h.183c.02 0 .037-.017.037-.038C6.5 5.422 8.967 3 11.947 3 14.984 3 17.5 5.462 17.5 8.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 1 1 0 7H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudFog02;
