import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDrop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2 6.352 8.737C5.198 10.143 4.5 12 4.5 14c0 4.418 3.358 8 7.5 8m0-20 5.647 6.735C18.8 10.142 19.5 11.999 19.5 14c0 4.418-3.358 8-7.5 8m0-20v20"
    />
  </svg>
);
export default SvgDrop02;
