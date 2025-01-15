import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryVerticalCharge02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.5 6H6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C2 8.605 2 9.07 2 10v4c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C4.605 18 5.07 18 6 18h.5m8 0h.5c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C19 15.395 19 14.93 19 14v-4c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C16.396 6 15.93 6 15 6h-.5m7.5 4v4M10.5 7 8 12h5l-2.5 5"
    />
  </svg>
);
export default SvgBatteryVerticalCharge02;
