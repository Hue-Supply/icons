import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleStop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.52 9.52 4.96 4.96M21 12a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 21 12Zm-5.28 0a3.72 3.72 0 1 1-7.44 0 3.72 3.72 0 0 1 7.44 0Z"
    />
  </svg>
);
export default SvgMessageCircleStop01;
