import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCirclePlus02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 21a9 9 0 0 1-2.214-.274c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 20.876 10.5m-3.053 3.612v3.395m0 0V20.9m0-3.394h3.395m-3.395 0h-3.395"
    />
  </svg>
);
export default SvgMessageCirclePlus02;
