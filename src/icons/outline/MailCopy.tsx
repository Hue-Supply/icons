import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailCopy = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3 8.5 6.71 4.473c.478.32 1.102.32 1.58 0L18 8.5m1.5 9A2.5 2.5 0 0 0 22 15V8.5a5 5 0 0 0-5-5H8A2.5 2.5 0 0 0 5.5 6m-.65 14.5h11.3A2.85 2.85 0 0 0 19 17.65v-8.3a2.85 2.85 0 0 0-2.85-2.85H4.85A2.85 2.85 0 0 0 2 9.35v8.3a2.85 2.85 0 0 0 2.85 2.85"
    />
  </svg>
);
export default SvgMailCopy;
