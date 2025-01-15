import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudOff03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.104 5h.702a5.82 5.82 0 0 1 5.52 3.98l.165.495q.01.024.036.025A4.473 4.473 0 0 1 22 13.973v.277c0 .592-.108 1.158-.306 1.68m-2.46 2.637A4.7 4.7 0 0 1 17.25 19H9A7 7 0 0 1 5.989 5.679M2.75 2l20 20"
    />
  </svg>
);
export default SvgCloudOff03;
