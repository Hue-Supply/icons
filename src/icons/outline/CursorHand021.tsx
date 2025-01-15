import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursorHand021 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m19.21 5.576.101.102A8.857 8.857 0 0 1 6.785 18.203l-1.25-1.251a1.771 1.771 0 1 1 2.505-2.505l1.15 1.15m-.182-5.193L5.17 6.566a1.771 1.771 0 0 0-2.505 2.505l7.053 7.053m2.847-7.174L11.034 7.42a1.771 1.771 0 1 0-2.505 2.505l1.531 1.532m5.009-5.01-1.29-1.29a1.771 1.771 0 1 0-2.504 2.505l1.289 1.29m7.175-2.848-2.42-2.42a1.771 1.771 0 1 0-2.505 2.505l.32.32"
    />
  </svg>
);
export default SvgCursorHand021;
