import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenToolPlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.172 12.886v3.27c0 .622 0 .934-.104 1.198a1.5 1.5 0 0 1-.434.602c-.218.182-.513.28-1.103.477l-8.805 2.935c-1.466.489-2.199.733-2.686.56a1.5 1.5 0 0 1-.559-.355m13.69-8.687L14.13 7.843m5.043 5.043L22 10.058l-5.043-5.043-2.828 2.828m0 0-3.227.043c-.622 0-.933 0-1.198.104a1.5 1.5 0 0 0-.602.434c-.182.218-.28.513-.477 1.103L5.69 18.333c-.489 1.465-.733 2.198-.56 2.685.076.212.197.4.351.555m0 0 5.616-5.607m0 0a2 2 0 1 0 2.826-2.83 2 2 0 0 0-2.826 2.83M2 5h3m0 0h3M5 5V2m0 3v3"
    />
  </svg>
);
export default SvgPenToolPlus;
