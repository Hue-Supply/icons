import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBottle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.07 12.472s1.644-1.061 4.93 0c3.287 1.06 4.93 0 4.93 0M14.5 6H9m5.759-.93V3.917A1.917 1.917 0 0 0 12.84 2h-2.06a2 2 0 0 0-2 2v1.193A8.64 8.64 0 0 1 7.631 9.5a8.64 8.64 0 0 0-1.149 4.307V19a3 3 0 0 0 3 3h5.036a3 3 0 0 0 3-3v-5.07a7.8 7.8 0 0 0-1.38-4.43 7.8 7.8 0 0 1-1.38-4.43"
    />
  </svg>
);
export default SvgBottle;
