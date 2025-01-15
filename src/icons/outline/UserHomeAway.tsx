import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserHomeAway = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 22s.611-3.998 5.5-3.998S22 22 22 22M7 22h-.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2v-5.8c0-.88 0-1.32.115-1.724a3 3 0 0 1 .495-.99c.254-.334.606-.598 1.31-1.126l5.2-3.9c1.033-.775 1.55-1.162 2.116-1.311a3 3 0 0 1 1.528 0c.567.15 1.083.536 2.116 1.311L20 7.5m-.406 5.219a3.094 3.094 0 1 1-6.188 0 3.094 3.094 0 0 1 6.188 0"
    />
  </svg>
);
export default SvgUserHomeAway;
