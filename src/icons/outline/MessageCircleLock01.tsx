import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleLock01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13.6 11.2V9.6a1.6 1.6 0 1 0-3.2 0v1.6M21 12a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 21 12Zm-10.664 4h3.328c.538 0 .806 0 1.012-.105a.96.96 0 0 0 .42-.42c.104-.204.104-.473.104-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.205-.104-.473-.104-1.011-.104h-3.328c-.538 0-.806 0-1.012.105a.96.96 0 0 0-.42.42c-.104.205-.104.473-.104 1.011v1.728c0 .538 0 .806.105 1.012a.96.96 0 0 0 .42.42c.205.104.473.104 1.011.104Z"
    />
  </svg>
);
export default SvgMessageCircleLock01;
