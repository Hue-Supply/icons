import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudFog01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 21h14M6.28 8.44h.183c.02 0 .037-.017.037-.038A5.4 5.4 0 0 1 11.894 3h.212A5.4 5.4 0 0 1 17.5 8.402c0 .02.017.037.037.037h.183a4.28 4.28 0 0 1 0 8.561H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudFog01;
