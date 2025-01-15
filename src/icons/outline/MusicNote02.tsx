import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMusicNote02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0V9.5m0 0V4.957c0-1.885 2.408-2.673 3.523-1.153a2.925 2.925 0 0 1-.959 4.297z"
    />
  </svg>
);
export default SvgMusicNote02;
