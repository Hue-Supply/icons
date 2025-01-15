import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.79 19.434v2.709m4.21-2.71v2.71m4.21-2.71v2.71M6.28 7.439h.183c.02 0 .037-.016.037-.037C6.5 4.422 8.967 2 11.947 2 14.984 2 17.5 4.462 17.5 7.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 1 1 0 7H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudRaining05;
