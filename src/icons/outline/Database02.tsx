import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDatabase02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M21 14.599c0 1.376-4.03 2.49-9 2.49s-9-1.114-9-2.49m17.998-4.765c0 1.375-4.028 2.49-8.998 2.49s-8.998-1.115-8.998-2.49M21 4.354v15.217C21 20.913 16.97 22 12 22s-9-1.087-9-2.429V4.355m18 .424c0 1.535-4.03 2.78-9 2.78s-9-1.245-9-2.78S7.03 2 12 2s9 1.244 9 2.78Z"
    />
  </svg>
);
export default SvgDatabase02;
