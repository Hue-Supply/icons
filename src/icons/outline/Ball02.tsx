import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBall02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.502 5.383c2.066-.592 5.431.33 8.237 2.524M4.502 5.383A9.98 9.98 0 0 1 12 2q.964.001 1.879.176M4.502 5.383a9.96 9.96 0 0 0-2.457 5.665m17.51 7.504c-1.021-4.269-3.853-8.33-6.816-10.645m6.815 10.645A9.96 9.96 0 0 0 22 12a10 10 0 0 0-.632-3.506m-1.814 10.058a9.98 9.98 0 0 1-7.33 3.446m-10.18-10.95c3.61-1.952 6.227-1.305 7.837-.221m-7.836.22Q2 11.519 2 12a9.98 9.98 0 0 0 3.943 7.958 9.96 9.96 0 0 0 6.28 2.04m0 0c.246-.933.566-2.36.566-4.572 0-2.054-.675-5.096-2.908-6.6m11.487-2.332a25 25 0 0 1-1.68-.4c-2.217-.599-5.53-2.158-5.81-5.918m7.49 6.318a10 10 0 0 0-2.927-4.143M13.88 2.176a9.96 9.96 0 0 1 4.562 2.175m0 0c-1.416.644-3.792 1.925-5.702 3.556M6 19.5c.497-3.482 2.014-6.368 3.881-8.673m2.858-2.92a22.4 22.4 0 0 0-2.858 2.92"
    />
  </svg>
);
export default SvgBall02;
