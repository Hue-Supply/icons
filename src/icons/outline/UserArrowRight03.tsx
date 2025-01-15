import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserArrowRight03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M4 21s.889-5.815 8-5.815c.93 0 1.754.1 2.483.272m.845 3.166h5.673m0 0h.031m-.031 0a.06.06 0 0 1-.022.048L18.37 21M21 18.623a.06.06 0 0 0-.022-.048l-2.608-2.328M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);
export default SvgUserArrowRight03;
