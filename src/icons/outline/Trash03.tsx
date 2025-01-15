import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 12.032V6h14v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22h-.255M3 6h18M5.685 22 3 19.315l2.685-2.686m-1.702 2.686h4.714c2.098 0 3.798-1.7 3.798-3.798s-1.014-3.376-3.012-4.81M16 6H8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.606 2 11.07 2 12 2s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 4.605 16 5.07 16 6"
    />
  </svg>
);
export default SvgTrash03;
