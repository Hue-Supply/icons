import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileGraph21 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="m12.5 10.75 2.246-.749a1 1 0 0 0 .752-.908c.002-.032.002-.067.002-.138V8.25a1.5 1.5 0 0 0-3 0zm0 0v3m0 0v1.5a2 2 0 0 1-2 2h-.25a1.75 1.75 0 1 1 0-3.5zM20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8Z"
    />
  </svg>
);
export default SvgFileGraph21;
