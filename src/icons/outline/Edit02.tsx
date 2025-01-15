import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 21h-9m-6.006-.535.16-.058c.378-.135.567-.203.744-.294q.235-.121.446-.283c.157-.12.3-.262.583-.546L20.31 6.9a2.268 2.268 0 1 0-3.207-3.207L4.72 16.077c-.283.284-.425.426-.546.583a3 3 0 0 0-.282.446c-.091.176-.16.365-.295.742l-.057.16c-.44 1.224-.66 1.836-.522 2.236a1.2 1.2 0 0 0 .742.741c.4.139 1.011-.08 2.235-.52"
    />
  </svg>
);
export default SvgEdit02;
