import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBucketDroplet = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.032 3.572 4.55 6.557c.107.155.161.232.247.458.045.116.125.503.13.627.01.242.008.257.002.288-.124.622-.487 1.566-1.504 2.582s-1.96 1.379-2.581 1.503c-.031.006-.046.01-.288-.001a3.4 3.4 0 0 1-.627-.13c-.227-.087-.304-.14-.459-.248l-6.651-4.622m7.181-7.014a1.3 1.3 0 0 0-.132-.154c-.982-.982-3.37-.186-5.333 1.778s-2.76 4.35-1.778 5.333q.03.03.062.057m7.181-7.014c.77 1.061-.042 3.312-1.91 5.179-1.923 1.924-4.255 2.727-5.271 1.835m1.948 7.336a2.768 2.768 0 1 1-5.535 0c0-.78.723-1.969 1.43-2.943.38-.525.57-.787.895-.916.252-.1.632-.1.884 0 .325.129.515.391.895.915.708.975 1.43 2.163 1.43 2.944"
    />
  </svg>
);
export default SvgBucketDroplet;
