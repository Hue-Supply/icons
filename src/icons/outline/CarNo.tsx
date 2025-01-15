import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarNo = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 17v-2.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 10 18.88 10 17.2 10M15 19.5H8.346c-.317 0-.476 0-.62.028a1.5 1.5 0 0 0-.97.657c-.079.123-.138.27-.256.565s-.177.442-.256.565a1.5 1.5 0 0 1-.97.657C5.13 22 4.97 22 4.653 22h-.269c-.826 0-1.239 0-1.556-.158a1.5 1.5 0 0 1-.67-.671C2 20.854 2 20.44 2 19.615V13.25c0-.232 0-.348.006-.446a3 3 0 0 1 2.798-2.798C4.902 10 5.018 10 5.25 10m11.95 0h3.3l-.841-3.364c-.325-1.3-.487-1.95-.85-2.434a3 3 0 0 0-1.24-.968C17.013 3 16.343 3 15.003 3H7.57a2.97 2.97 0 0 0-2.742 1.827M17.2 10H10m-3.5 4.5h.01m10.99 0h.01M2 2l2.827 2.827M22 22 4.827 4.827M7 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgCarNo;
