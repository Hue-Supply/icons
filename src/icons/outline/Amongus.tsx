import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAmongus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 21V8.5A5.5 5.5 0 0 0 11.5 3H11a5 5 0 0 0-5 5m11 13h-6.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 18.72 6 17.88 6 16.2V14m11 7V10h.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 11.52 21 12.08 21 13.2V17c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C18.396 21 17.93 21 17 21M6 14h4a3 3 0 1 0 0-6H6m0 6a3 3 0 1 1 0-6"
    />
  </svg>
);
export default SvgAmongus;
