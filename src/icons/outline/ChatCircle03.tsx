import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatCircle03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.889 7.906a6.96 6.96 0 0 1 5.837 8.886c-.226.762-.318 1.577-.069 2.332l.305.926a1.5 1.5 0 0 1-1.746 1.935l-1.972-.433c-.551-.12-1.121-.067-1.671.055a6.961 6.961 0 0 1-8.395-5.696M6.08 7.905h5.71m-5.71 3.203h3.426M15.9 9.004a6.96 6.96 0 0 1-8.48 6.793c-.55-.123-1.12-.176-1.672-.055l-1.972.432A1.5 1.5 0 0 1 2.03 14.24l.305-.926c.249-.756.157-1.57-.069-2.333A6.96 6.96 0 1 1 15.9 9.004"
    />
  </svg>
);
export default SvgChatCircle03;
