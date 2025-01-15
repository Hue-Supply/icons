import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSubway = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.143 16A9.9 9.9 0 0 0 22 11.965c0-5.466-4.431-9.897-9.897-9.897s-9.898 4.43-9.898 9.897c0 1.437.306 2.803.857 4.035m11.952 2H15m-5.924 0h-.014m-1.857-3 9.795.033M8.4 21h7.2c.84 0 1.26 0 1.58-.163a1.5 1.5 0 0 0 .656-.656c.164-.32.164-.74.164-1.581v-5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 8 14.88 8 13.2 8h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 10.28 6 11.12 6 12.8v5.8c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.58.163"
    />
  </svg>
);
export default SvgSubway;
