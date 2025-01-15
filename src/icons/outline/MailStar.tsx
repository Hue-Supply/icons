import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailStar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 13V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6M3.5 5.585l7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585m-3.706 11.25-2.187.717a.1.1 0 0 0-.05.154l1.347 1.865a.1.1 0 0 1 .02.058l.006 2.301a.1.1 0 0 0 .13.095l2.191-.704a.1.1 0 0 1 .061 0l2.19.704a.1.1 0 0 0 .131-.095l.007-2.3a.1.1 0 0 1 .02-.059l1.346-1.865a.1.1 0 0 0-.05-.154l-2.186-.717a.1.1 0 0 1-.05-.036l-1.357-1.858a.1.1 0 0 0-.162 0L16.843 16.8a.1.1 0 0 1-.05.036"
    />
  </svg>
);
export default SvgMailStar;
