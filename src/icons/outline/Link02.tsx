import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.636 11.293 4.438 12.49a5 5 0 0 0 7.07 7.071l1.2-1.198M11.292 5.636l1.15-1.151a5 5 0 1 1 7.072 7.07l-1.152 1.152m-9.191 2.121 5.656-5.656"
    />
  </svg>
);
export default SvgLink02;
