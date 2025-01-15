import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasSnow = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m11.968 2.006.006 2m0 0 .051 15.989m-.05-15.99-2 .006m2-.006L13.972 4m-1.948 15.996.007 1.999m-.007-1.999-1.998.006m1.998-.006 1.999-.006M3.694 6.442l1.661 1.111m0 0 13.29 8.894M5.354 7.553 4.244 9.215m1.111-1.662 1.112-1.66m12.177 10.554 1.661 1.111m-1.66-1.111-1.113 1.66m1.112-1.66 1.112-1.661m.514-8.397L18.616 7.51m0 0L5.384 16.49M18.616 7.51l1.122 1.654m-1.122-1.654-1.123-1.654M5.383 16.49 3.73 17.61m1.654-1.122 1.122 1.654m-1.122-1.654-1.122-1.654"
    />
  </svg>
);
export default SvgChristmasSnow;
