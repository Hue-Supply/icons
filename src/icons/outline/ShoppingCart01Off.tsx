import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCart01Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m4.844 5.364 1.68 9.022c.173.93.26 1.395.498 1.744a2 2 0 0 0 .843.7c.386.17.859.17 1.805.17h6.788M10.51 5.952l7.059-.061c1.314-.012 1.971-.017 2.438.247a2 2 0 0 1 .888 1.044c.187.503.077 1.151-.144 2.447l-.804 4.71q-.063.375-.116.662M1.75 2l20 20m-3.432-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgShoppingCart01Off;
