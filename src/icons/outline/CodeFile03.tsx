import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodeFile03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14 2.236a3 3 0 0 0-.505-.162C13.168 2 12.823 2 12.133 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8m10-4.564q.165.07.322.16c.291.166.546.4 1.054.866l3.068 2.811c.573.526.86.789 1.065 1.102a3 3 0 0 1 .377.825M14 2.236V6.5A1.5 1.5 0 0 0 15.5 8h4.386M4 17.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.612c0-.778 0-1.167-.092-1.53L19.886 8M5.793 10l-1.647 1.646a.5.5 0 0 0 0 .708L5.793 14m4-4 1.646 1.646a.5.5 0 0 1 0 .708L9.793 14"
    />
  </svg>
);
export default SvgCodeFile03;
