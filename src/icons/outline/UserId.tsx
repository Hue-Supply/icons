import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserId = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 18s.418-2.833 3.758-2.833S11.516 18 11.516 18m1.802-9h5m-5 3h5m-8.446-1.428c0 1.21-.947 2.192-2.114 2.192-1.168 0-2.114-.982-2.114-2.192S6.59 8.38 7.758 8.38s2.114.98 2.114 2.192M6.8 19h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 5 18.88 5 17.2 5H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.28 2 8.12 2 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 19 5.12 19 6.8 19"
    />
  </svg>
);
export default SvgUserId;
