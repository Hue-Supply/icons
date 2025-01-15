import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPepper = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.905 3.253c-2.314-.965-4.364.626-3.616 2.82m-2.74 3.501c1.345 6.361-7.397 9.921-12.07 2.912-.275-.411-.925-.276-.91.219.563 6.192 6.867 9.84 13.167 7.712 5.642-1.906 8.455-9.313 5.99-13.257-.738-1.179-1.761-1.064-3.036-.89-1.895.258-3.635.97-3.142 3.304"
    />
  </svg>
);
export default SvgPepper;
