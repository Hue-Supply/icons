import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcecreamOff01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 15.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 15.5V7.615m8 2.68V5a3 3 0 0 0-3-3h-2c-.916 0-1.736.41-2.287 1.058M12 22v-4m3-15-3.008 3.009m.258 5.741L8.5 15.5m-6-13.803 20 20"
    />
  </svg>
);
export default SvgIcecreamOff01;
