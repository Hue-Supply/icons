import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryHorizontalCharge02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 2h4m-2 7-2 4.5h4L12 18M10.8 5H14c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 7.605 18 8.07 18 9v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 22 14.88 22 13.2 22h-2.7c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C6 19.597 6 18.898 6 17.5V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 5 9.12 5 10.8 5"
    />
  </svg>
);
export default SvgBatteryHorizontalCharge02;
