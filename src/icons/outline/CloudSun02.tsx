import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSun02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 7a5 5 0 1 1 5.732 4.947m-11.452.492h.183c.02 0 .037-.016.037-.037C6.5 9.422 8.967 7 11.947 7c3.037 0 5.553 2.462 5.553 5.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 1 1 0 7H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudSun02;
