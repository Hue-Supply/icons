import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDatabase01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 4.78c0 1.534-4.03 2.779-9 2.779s-9-1.245-9-2.78m18 0C21 3.244 16.97 2 12 2S3 3.244 3 4.78m18 0V19.57C21 20.913 16.97 22 12 22s-9-1.087-9-2.429V4.78m18 7.548c0 1.376-4.03 2.49-9 2.49s-9-1.114-9-2.49"
    />
  </svg>
);
export default SvgDatabase01;
