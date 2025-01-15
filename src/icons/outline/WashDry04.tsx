import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashDry04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.99 12H9m2.99 0H12m3 0h.01M6.8 22h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 2 18.88 2 17.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    />
  </svg>
);
export default SvgWashDry04;
