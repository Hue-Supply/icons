import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSend0404 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.019 10.619 4.203 3.163c-1.29-.572-2.584.792-1.945 2.05l3.094 6.098a1.5 1.5 0 0 1 0 1.358l-3.094 6.098c-.639 1.258.655 2.622 1.945 2.05l16.816-7.456c1.19-.527 1.19-2.215 0-2.742"
    />
  </svg>
);
export default SvgSend0404;
