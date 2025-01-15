import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCartificate05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 18h1.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 16.48 20 15.92 20 14.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 2 17.92 2 16.8 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 3.52 4 4.08 4 5.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 18 6.08 18 7.2 18H9m.602.067v2.562c0 .696 0 1.044.142 1.281a1 1 0 0 0 .577.446c.266.077.603-.01 1.276-.187.149-.04.223-.059.299-.067a1 1 0 0 1 .209 0c.075.008.15.028.299.067.673.176 1.009.264 1.275.187a1 1 0 0 0 .577-.446c.143-.237.143-.585.143-1.28v-2.337M10 8.767h4m-6-3h8m-.5 9.733a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
    />
  </svg>
);
export default SvgCartificate05;
