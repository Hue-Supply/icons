import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 6h8.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 8.28 19 9.12 19 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.076 1.178M13.5 18H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 15.72 2 14.88 2 13.2v-2.4c0-1.68 0-2.52.327-3.162M22 10v4M1.75 2l20 20"
    />
  </svg>
);
export default SvgBatteryOff;
