import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleX01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.6 10.1 2.4 2.4m0 0 2.4 2.4M12 12.5l2.4-2.4M12 12.5l-2.4 2.4M21 12a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 21 12Z"
    />
  </svg>
);
export default SvgMessageCircleX01;
