import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGift01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 7h3.5a2.5 2.5 0 0 0 0-5h-.071A3.43 3.43 0 0 0 12 5.429M12 7V5.429M12 7H8.5a2.5 2.5 0 0 1 0-5h.071A3.43 3.43 0 0 1 12 5.429M12 7v15m9-7.5H3M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2v-5.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 7 17.88 7 16.2 7H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 9.28 3 10.12 3 11.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22"
    />
  </svg>
);
export default SvgGift01;
