import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEye = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.52 13.264c-.1-.2-.15-.3-.226-.712a5 5 0 0 1 0-1.104c.077-.411.127-.511.227-.712C3.525 8.719 6.169 5 12 5s8.475 3.72 9.48 5.736c.1.2.15.3.226.712.041.22.041.884 0 1.104-.076.411-.127.511-.227.712C20.475 15.281 17.831 19 12 19s-8.475-3.72-9.48-5.736"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgEye;
