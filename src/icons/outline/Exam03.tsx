import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExam03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.244 13.078c.227.77.581 1.966.872 3.051m-.872-3.05c-.465.315-.867.629-1.174.887m1.174-.888c1.044-.707 2.41-1.422 3.756-1.54M9.116 16.13c.141.525.43 1.794.488 2.686m-.488-2.686c.351-.173 1.128-.538 1.427-.613M14 2.236V5.6c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.656c.32.163.74.163 1.581.163h3.486M14 2.236a3 3 0 0 0-.505-.162C13.168 2 12.823 2 12.133 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.612c0-.778 0-1.167-.092-1.53L19.886 8M14 2.236q.165.07.322.16c.291.166.546.4 1.054.866l3.068 2.811c.573.526.86.789 1.065 1.102a3 3 0 0 1 .377.825"
    />
  </svg>
);
export default SvgExam03;
