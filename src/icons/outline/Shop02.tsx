import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 21h20M21 8a3 3 0 1 1-6 0 3 3 0 1 1-6 0 3 3 0 0 1-6 0m18 13V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V21zm-6.6 0v-3.811c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.58V21z"
    />
  </svg>
);
export default SvgShop02;
