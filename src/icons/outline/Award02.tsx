import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAward02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.838 15.522v4.776c0 .67 0 1.004.137 1.239a1 1 0 0 0 .536.439c.257.088.585.023 1.242-.11l2.932-.588c.118-.023.177-.035.236-.04a1 1 0 0 1 .158 0c.06.005.118.017.236.04l2.932.589c.657.132.985.197 1.242.109a1 1 0 0 0 .536-.44c.137-.234.137-.569.137-1.238v-5.294M19.5 9.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
    />
  </svg>
);
export default SvgAward02;
