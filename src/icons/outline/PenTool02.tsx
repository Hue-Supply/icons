import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenTool02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.755 11.32v3.27c0 .621 0 .932-.104 1.197a1.5 1.5 0 0 1-.433.602c-.219.182-.514.28-1.104.477L7.31 19.801c-1.466.489-2.199.733-2.686.56a1.5 1.5 0 0 1-.557-.353m13.69-8.689-5.044-5.043m5.043 5.043 2.829-2.828-5.043-5.043-2.829 2.828m0 0-3.227.043c-.622 0-.933 0-1.198.104a1.5 1.5 0 0 0-.601.434c-.183.218-.281.513-.478 1.103l-2.935 8.805c-.488 1.466-.733 2.199-.559 2.686a1.5 1.5 0 0 0 .352.557m0 0 5.609-5.615m0 0a2 2 0 1 0 2.836-2.82 2 2 0 0 0-2.836 2.82"
    />
  </svg>
);
export default SvgPenTool02;
