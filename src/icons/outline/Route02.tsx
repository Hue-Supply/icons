import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoute02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5h7c1.796 0 2.622 2.132 1.478 3.352l-.101.084c-.05.041-.223.161-.28.193-.11.064-.164.086-.27.13L4.173 15.241c-.107.044-.16.066-.272.13-.056.032-.229.152-.279.193l-.101.084C2.378 16.868 3.204 19 5 19h7m10 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgRoute02;
