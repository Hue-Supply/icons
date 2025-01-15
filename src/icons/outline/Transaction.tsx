import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTransaction = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h8M8 6v6.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C10.28 17 11.12 17 12.8 17h.7M16 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3.41 7.14h-.88a1.71 1.71 0 0 0 0 3.421h1.76a1.71 1.71 0 0 1 0 3.421h-.88m0-6.842V12m0 1.14h1.27c.388 0 .76.152 1.037.422m-2.306 6.42v1.14m0-1.14h-.965c-.167 0-.25 0-.333-.005a3 3 0 0 1-.992-.227c-.076-.032-.15-.068-.3-.14"
    />
  </svg>
);
export default SvgTransaction;
