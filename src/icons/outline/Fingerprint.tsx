import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFingerprint = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m5.807 18.53.054-.089q.612-.97 1.06-2.039m6.758 4.442A22 22 0 0 0 15.171 17m.626-3q.202-1.473.203-3a4 4 0 0 0-8 0q0 1.02-.141 2m11.15 5.132C19.656 15.866 20 13.473 20 11a7.96 7.96 0 0 0-1.153-4.14M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4M8 4.07A7.96 7.96 0 0 1 12 3c1.457 0 2.823.39 4 1.07M12 11c0 3.517-1.009 6.799-2.753 9.571"
    />
  </svg>
);
export default SvgFingerprint;
