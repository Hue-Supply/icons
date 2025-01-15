import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeat01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.96 4.073a8.26 8.26 0 0 0-5.162 14.709m4.83-12.455 2.07-2.304-2.304-2.07m.585 18.028a8.217 8.217 0 0 0 5.81-14.028M12.9 17.735l-1.934 2.398 2.398 1.936"
    />
  </svg>
);
export default SvgRepeat01;
