import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSandbox = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 15.642V18m0 0H9.572M12 18h2.428m-5.584-2.965h6.313c1.02 0 1.53 0 1.919-.198.343-.175.621-.454.796-.796.198-.39.198-.9.198-1.92v-2.67c0-1.02 0-1.53-.198-1.92a1.82 1.82 0 0 0-.796-.796c-.39-.198-.9-.198-1.92-.198H8.845c-1.02 0-1.53 0-1.92.198a1.82 1.82 0 0 0-.796.796c-.198.39-.198.9-.198 1.92v2.67c0 1.02 0 1.53.198 1.92.175.342.453.621.796.796.39.198.9.198 1.92.198M6.8 22h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 2 18.88 2 17.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22"
    />
  </svg>
);
export default SvgSandbox;
