import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagSale = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.134 7.113h.01m9.092 5.404-3.616 3.615m3.615 0h.008m-3.63-3.615h.007M2.05 6.836l-.001 1.197c0 .735 0 1.102.082 1.447a3 3 0 0 0 .36.868c.185.303.445.563.964 1.082l8.442 8.442c1.188 1.188 1.782 1.782 2.467 2.004a3 3 0 0 0 1.854 0c.685-.223 1.279-.817 2.467-2.005l1.198-1.198c1.188-1.188 1.782-1.782 2.005-2.467a3 3 0 0 0 0-1.854c-.223-.685-.817-1.279-2.005-2.467L11.44 3.443c-.52-.519-.779-.778-1.082-.964a3 3 0 0 0-.867-.36c-.346-.082-.713-.082-1.447-.082H6.847c-1.678.002-2.518.002-3.16.329a3 3 0 0 0-1.31 1.31c-.327.641-.327 1.48-.328 3.16m5.584.277a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgTagSale;
