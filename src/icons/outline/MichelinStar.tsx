import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMichelinStar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.037 4.506c.539-3.369 5.387-3.369 5.925 0l.298 1.86 1.738-.663c3.189-1.218 5.61 2.986 2.958 5.134L18.52 12l1.436 1.164c2.652 2.148.23 6.35-2.958 5.134l-1.738-.664-.298 1.86c-.538 3.369-5.386 3.369-5.925 0l-.297-1.86-1.738.663c-3.19 1.218-5.61-2.985-2.958-5.133L5.48 12l-1.436-1.163C1.39 8.689 3.813 4.485 7.002 5.703l1.738.663z"
    />
  </svg>
);
export default SvgMichelinStar;
