import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenToolMinus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.172 11.387v3.27c0 .623 0 .934-.104 1.198a1.5 1.5 0 0 1-.434.602c-.218.182-.513.28-1.103.477L8.726 19.87c-1.466.489-2.199.733-2.686.56a1.5 1.5 0 0 1-.56-.356m13.692-8.686-5.043-5.043m5.043 5.043L22 8.56l-5.043-5.043-2.828 2.828m0 0-3.227.043c-.622 0-.933 0-1.198.104a1.5 1.5 0 0 0-.602.434c-.182.218-.28.513-.477 1.103L5.69 16.834c-.489 1.465-.733 2.198-.56 2.685a1.5 1.5 0 0 0 .35.554m0 0 5.615-5.608m0 0a2 2 0 1 0 2.83-2.827 2 2 0 0 0-2.83 2.827M2 3.515h6"
    />
  </svg>
);
export default SvgPenToolMinus;
