import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNote04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.332 10.5h.01m-12.557 3h.01M12 19s2.5-1 5-1c.533 0 1.066.045 1.574.117 1.405.197 2.107.296 2.473.152.368-.144.566-.315.76-.66.193-.343.193-.946.193-2.154v-8.83c0-.57 0-.854-.114-1.13a1.65 1.65 0 0 0-.473-.616c-.237-.181-.478-.246-.96-.375C19.515 4.253 18.258 4 17 4c-2.5 0-5 1-5 1m0 14s-2.5 1-5 1c-1.257 0-2.514-.253-3.454-.504-.481-.13-.722-.194-.959-.375a1.65 1.65 0 0 1-.473-.616C2 18.229 2 17.945 2 17.375v-8.83c0-1.208 0-1.811.193-2.154.194-.345.392-.516.76-.66.366-.144 1.068-.045 2.473.152A11 11 0 0 0 7 6c2.5 0 5-1 5-1m0 14"
    />
  </svg>
);
export default SvgBankNote04;
