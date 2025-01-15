import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAnnotationUser = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.392 15.152S8.793 12.53 12 12.53s3.608 2.622 3.608 2.622M7.8 3h9.4c1.68 0 1.658 0 2.3.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-.62.327-2.3.327-.365 0-.548 0-.722.03a2 2 0 0 0-.794.33c-.145.1-.274.23-.532.489l-.89.888c-.791.792-1.187 1.188-1.644 1.337a2 2 0 0 1-1.236 0c-.457-.149-.853-.545-1.645-1.337l-1.596-1.596A.48.48 0 0 0 7.8 18c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 15.72 3 14.88 3 13.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3m6.23 5.003a2.03 2.03 0 1 1-4.06 0 2.03 2.03 0 0 1 4.06 0"
    />
  </svg>
);
export default SvgAnnotationUser;
