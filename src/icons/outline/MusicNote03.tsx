import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMusicNote03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.5 8V5.587c0-.923 0-1.384.164-1.764a2 2 0 0 1 .676-.835c.337-.24.787-.337 1.69-.53l1.567-.336c.994-.213 1.49-.32 1.88-.189a1.5 1.5 0 0 1 .814.658c.209.354.209.862.209 1.878v.09c0 .693 0 1.039-.123 1.323a1.5 1.5 0 0 1-.507.627c-.252.18-.59.253-1.267.398zm0 0v10.5m0-.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgMusicNote03;
