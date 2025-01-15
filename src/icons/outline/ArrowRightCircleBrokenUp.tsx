import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRightCircleBrokenUp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.03 11.223a9.96 9.96 0 0 1 2.9-6.294c3.904-3.905 10.236-3.905 14.141 0 3.906 3.905 3.906 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0l7.956-7.955m.758 5.242v-6h-6"
    />
  </svg>
);
export default SvgArrowRightCircleBrokenUp;
