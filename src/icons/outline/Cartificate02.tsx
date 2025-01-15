import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCartificate02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v1.07m-7.31 10.115v1.932c0 .67 0 1.005.137 1.239a1 1 0 0 0 .536.44c.257.088.585.022 1.241-.11l.751-.15c.117-.024.176-.036.236-.04a1 1 0 0 1 .158 0c.06.004.118.016.236.04l.75.15c.657.132.985.198 1.242.11a1 1 0 0 0 .536-.44c.137-.234.137-.57.137-1.239v-2.23M6 8.27h6m-6 3h3m-3 3h3m13 .638a4.33 4.33 0 1 1-8.66 0 4.33 4.33 0 0 1 8.66 0"
    />
  </svg>
);
export default SvgCartificate02;
