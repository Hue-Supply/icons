import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMushroom = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 12.143V19c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 22 12.932 22 12 22s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 20.398 9 19.932 9 19v-6.857M12 2a9 9 0 0 1 9 9v.773a.055.055 0 0 1-.072.052c-1.304-.423-3.12-.423-4.423 0-1.303.424-3.12.424-4.422 0l-.074-.024c-1.26-.41-3.015-.41-4.275 0-1.328.432-3.193.406-4.451-.061A.43.43 0 0 1 3 11.334V11a9 9 0 0 1 9-9"
    />
  </svg>
);
export default SvgMushroom;
