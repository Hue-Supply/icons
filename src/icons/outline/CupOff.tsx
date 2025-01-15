import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCupOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.2 9.374a1.5 1.5 0 0 1-1.5-1.5V6.869a1.5 1.5 0 0 1 1.5-1.5H6m-.8 4.005H5L7 22h10l.75-4.735M5.2 9.374H10m8.8 0a1.5 1.5 0 0 0 1.5-1.5V6.869a1.5 1.5 0 0 0-1.5-1.5h-.395m.396 4.005H15.5m3.3 0h.2l-.5 3.156M8 2h8.405a2 2 0 0 1 2 2v1.369m0 0H11.5m-9-3.672 20 20"
    />
  </svg>
);
export default SvgCupOff;
