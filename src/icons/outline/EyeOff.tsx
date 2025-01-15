import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEyeOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.387 17.666C16.002 18.454 14.235 19 12 19c-5.831 0-8.475-3.72-9.48-5.736-.1-.2-.15-.301-.226-.713a5 5 0 0 1 0-1.103c.077-.411.127-.512.227-.713.58-1.164 1.705-2.893 3.672-4.148M20.403 15c.475-.627.826-1.233 1.075-1.734.101-.201.151-.302.228-.714a5 5 0 0 0 0-1.103c-.076-.412-.127-.512-.227-.713C20.475 8.719 17.831 5 12 5q-.678 0-1.3.065m3.3 9.171A3 3 0 0 1 9.764 10M22 22 2 2"
    />
  </svg>
);
export default SvgEyeOff;
