import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScale02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 8v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H16M12.379 7.317h4.367m0 0v4.367m0-4.367L16.5 7.5l-4.595 4.73-.282.277m0 0a1.5 1.5 0 0 0-.443-.343C10.861 12 10.441 12 9.6 12H5.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C3 13.139 3 13.559 3 14.4v1.8c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h1.8c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-4.2c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.212-.312"
    />
  </svg>
);
export default SvgScale02;
