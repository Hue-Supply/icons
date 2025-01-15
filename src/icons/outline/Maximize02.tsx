import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m14.97 9.015 5.483-5.484M9.048 14.984l-5.483 5.483m17.42-12.15V3h-5.317M3.033 15.682V21H8.35M3.033 8.318V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.31C5.313 3 6.153 3 7.833 3h.517m12.635 12.68v.516c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.517"
    />
  </svg>
);
export default SvgMaximize02;
