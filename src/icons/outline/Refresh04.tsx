import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 4a8 8 0 0 0-5 14.245m4.677-12.062 2.005-2.231-2.231-2.005m.567 17.46a7.958 7.958 0 0 0 5.627-13.586m-4.735 11.41-1.875 2.323 2.323 1.875"
    />
  </svg>
);
export default SvgRefresh04;
