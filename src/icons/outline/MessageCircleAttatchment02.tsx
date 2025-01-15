import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleAttatchment02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 0 1-2.214-.274c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 20.876 10.5m-1.784 8.326-3.17-3.17a1.488 1.488 0 0 1 2.105-2.104l3.157 3.158a3 3 0 0 1-4.242 4.243L14.82 18.83"
    />
  </svg>
);
export default SvgMessageCircleAttatchment02;
