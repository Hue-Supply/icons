import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlashOff2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12v.4c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C17.44 22 15.76 22 12.4 22H12m-4-3 4.963-6.9c.766-1.066 1.15-1.598 1.638-1.819a2 2 0 0 1 1.365-.101c.516.146.974.616 1.889 1.556L19 12.913M7.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 16.72 19 15.88 19 14.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 3 15.88 3 14.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgFlashOff2;
