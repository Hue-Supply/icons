import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAward04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.839 15.14v5.158c0 .67 0 1.004.137 1.239a1 1 0 0 0 .536.439c.257.088.585.023 1.242-.11l2.932-.588c.118-.023.176-.035.236-.04a1 1 0 0 1 .158 0c.06.005.118.017.236.04l2.932.589c.657.131.985.197 1.242.109a1 1 0 0 0 .536-.44c.137-.234.137-.569.137-1.238v-5.159M7.631 4.34a2.97 2.97 0 0 0 2-1.155 2.97 2.97 0 0 1 4.74 0 2.97 2.97 0 0 0 2 1.156 2.97 2.97 0 0 1 2.37 4.103 2.97 2.97 0 0 0 0 2.311 2.97 2.97 0 0 1-2.37 4.104c-.795.099-1.517.516-2 1.155a2.97 2.97 0 0 1-4.74 0 2.97 2.97 0 0 0-2-1.155 2.97 2.97 0 0 1-2.37-4.104 2.97 2.97 0 0 0 0-2.31 2.97 2.97 0 0 1 2.37-4.104"
    />
  </svg>
);
export default SvgAward04;
