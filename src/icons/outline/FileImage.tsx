import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileImage = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 21 3.524-5.09c.34-.49.509-.735.732-.85a1 1 0 0 1 .638-.093c.247.046.48.232.945.604l.543.435c.217.173.325.26.441.284a.5.5 0 0 0 .306-.032c.109-.049.197-.156.372-.37l2.88-3.52c.387-.474.581-.71.819-.807a1 1 0 0 1 .655-.032c.245.071.462.288.895.721L20 14.5m0-7.7v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8ZM12 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgFileImage;
