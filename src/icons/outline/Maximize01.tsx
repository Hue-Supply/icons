import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m20.985 3-6.014 6.015m0 0V3.698m0 5.317h5.317M3.033 20.999l6.014-6.015m0 0v5.317m0-5.317H3.731M3.033 3.001l6.014 6.015m0 0V3.699m0 5.317H3.731m17.254 11.981-6.014-6.014m0 0v5.316m0-5.316h5.317"
    />
  </svg>
);
export default SvgMaximize01;
