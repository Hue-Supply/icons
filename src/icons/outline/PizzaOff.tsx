import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPizzaOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.836 16.115c1.435.84 4.154 1.406 7.272 1.406 1.785 0 3.438-.186 4.796-.502m3.48 3.35c-.19.212-.436.38-.733.48C17.481 21.573 14.844 22 12 22c-2.842 0-5.479-.425-7.648-1.15-1.04-.349-1.461-1.54-.995-2.533L8.064 8.29m10.238 5.033L13.36 2.793c-.54-1.15-2.176-1.15-2.716 0l-.793 1.69m-.47 9.389v-.01M12 7.11V7.1M2 2l20 20M9.38 13.417a.455.455 0 1 0 0 .91.455.455 0 0 0 0-.91M12 6.655a.455.455 0 1 0 0 .91.455.455 0 0 0 0-.91"
    />
  </svg>
);
export default SvgPizzaOff;
