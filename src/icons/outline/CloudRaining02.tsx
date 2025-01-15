import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.395 19.577 7.183 22m5.422-2.423L11.394 22m5.422-2.423L15.605 22M6.28 7.44h.183c.02 0 .037-.017.037-.038C6.5 4.422 8.967 2 11.947 2 14.984 2 17.5 4.462 17.5 7.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 1 1 0 7H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudRaining02;
