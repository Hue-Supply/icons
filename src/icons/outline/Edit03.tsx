import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21.96 20.95-.54-.517c-1.204-1.155-2.99-1.218-4.26-.152a3.14 3.14 0 0 1-4.093 0l-.07-.059a3.4 3.4 0 0 0-1.087-.615m-6.872.858.16-.058c.378-.135.567-.203.744-.294q.235-.121.446-.283c.157-.12.3-.262.583-.546L19.354 6.9a2.268 2.268 0 0 0-3.207-3.207L3.763 16.077c-.283.284-.425.426-.546.583a3 3 0 0 0-.282.446c-.091.176-.16.365-.295.742l-.058.16c-.44 1.224-.659 1.836-.52 2.236a1.2 1.2 0 0 0 .74.741c.4.139 1.012-.08 2.236-.52"
    />
  </svg>
);
export default SvgEdit03;
