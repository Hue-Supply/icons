import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPeace = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18v-9m0-9v9m0 0 6.387 6.388M12 12l-6.267 6.267"
    />
  </svg>
);
export default SvgPeace;
