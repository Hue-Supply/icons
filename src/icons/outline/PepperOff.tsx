import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPepperOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.548 9.574c-.493-2.333 1.247-3.046 3.142-3.305 1.275-.173 2.298-.288 3.036.891 1.26 2.015 1.141 4.935-.03 7.563m-6.982-.766c-2.239 3.13-7.822 3.648-11.235-1.47-.275-.412-.925-.277-.91.218.563 6.192 6.867 9.84 13.167 7.712a9.3 9.3 0 0 0 3.318-1.99m2.851-15.174c-2.314-.965-4.364.626-3.616 2.82M2.5 1.698l20 20"
    />
  </svg>
);
export default SvgPepperOff;
