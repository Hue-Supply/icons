import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash051 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.875 6H5v12.698m14-7.5V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H8.554M8 2.992S9.663 2 12 2s4 .992 4 .992M3 6h14.609M2 22 22 2"
    />
  </svg>
);
export default SvgTrash051;
