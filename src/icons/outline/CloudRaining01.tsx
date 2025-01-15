import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.395 19.577 7.183 22m5.422-2.423L11.394 22m5.422-2.423L15.605 22M6.28 7.44h.183c.02 0 .037-.017.037-.038A5.4 5.4 0 0 1 11.894 2h.212A5.4 5.4 0 0 1 17.5 7.402c0 .02.017.037.037.037h.183a4.28 4.28 0 0 1 0 8.561H6.28a4.28 4.28 0 0 1 0-8.56"
    />
  </svg>
);
export default SvgCloudRaining01;
