import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDownCircleBrokenRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.778 2.03A9.96 9.96 0 0 1 19.07 4.93c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142l7.955 7.955m-5.242.758h6v-6"
    />
  </svg>
);
export default SvgArrowDownCircleBrokenRight;
