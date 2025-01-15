import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightning02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m11.31 8.285 1.3-5.294c.083-.338.125-.507.083-.64a.5.5 0 0 0-.219-.279C12.355 2 12.181 2 11.834 2H7.96c-.218 0-.327 0-.418.037a.5.5 0 0 0-.204.156c-.061.077-.09.182-.149.392L5.135 9.939c-.386 1.38-.578 2.07-.421 2.615a2 2 0 0 0 .871 1.148c.483.298 1.2.298 2.632.298h3.115c.31 0 .466 0 .58.063a.5.5 0 0 1 .22.247c.048.12.03.274-.006.583l-.628 5.386c-.124 1.07-.187 1.604-.047 1.77a.5.5 0 0 0 .49.166c.21-.046.487-.509 1.039-1.433l6.15-10.295c.237-.397.356-.595.34-.758a.5.5 0 0 0-.202-.356c-.132-.097-.363-.097-.824-.097h-6.357c-.348 0-.522 0-.642-.072a.5.5 0 0 1-.218-.279c-.042-.133 0-.302.083-.64"
    />
  </svg>
);
export default SvgLightning02;
