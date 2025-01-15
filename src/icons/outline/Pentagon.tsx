import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPentagon = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.08 3.44c.688-.516 1.033-.775 1.41-.874a2 2 0 0 1 1.02 0c.377.1.722.358 1.41.874l6.361 4.771c.621.466.932.698 1.126 1a2 2 0 0 1 .309.885c.036.356-.062.732-.258 1.483l-1.834 7.029c-.223.856-.335 1.284-.577 1.602-.213.281-.497.5-.823.636-.37.154-.812.154-1.696.154H7.472c-.884 0-1.327 0-1.696-.154a2 2 0 0 1-.823-.636c-.242-.318-.354-.746-.577-1.602l-1.834-7.03c-.196-.75-.294-1.126-.258-1.482a2 2 0 0 1 .31-.885c.193-.302.504-.534 1.125-1z"
    />
  </svg>
);
export default SvgPentagon;
