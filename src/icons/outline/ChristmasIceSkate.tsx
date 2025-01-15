import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasIceSkate = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m11.114 4.562-1.909.778m3.324 2.05-1.91.778M2 21.5h17.5A2.5 2.5 0 0 0 22 19M6.5 16.5v5m10.5-5v5M15.608 8.325h1.006A5.386 5.386 0 0 1 22 13.71a2.693 2.693 0 0 1-2.693 2.693H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 14.123 2 13.283 2 11.603v-5.58c0-.612 0-.917.101-1.179a1.5 1.5 0 0 1 .423-.597c.212-.182.5-.284 1.077-.488l3.367-1.188c1.244-.439 1.866-.658 2.436-.594a2.5 2.5 0 0 1 1.358.595c.434.377.694.983 1.214 2.195l.694 1.62c.049.115.073.172.098.224a3 3 0 0 0 2.596 1.711c.057.003.12.003.244.003Z"
    />
  </svg>
);
export default SvgChristmasIceSkate;
