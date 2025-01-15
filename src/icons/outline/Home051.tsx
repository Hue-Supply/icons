import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome051 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 11.256 15.305 4.9c-1.163-1.104-1.744-1.655-2.408-1.863a3 3 0 0 0-1.794 0c-.664.208-1.245.76-2.408 1.863L2 11.256m17.926-1.809V17.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.274c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V9.447M15 21v-5c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 13 12.932 13 12 13s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C9 14.602 9 15.068 9 16v5z"
    />
  </svg>
);
export default SvgHome051;
