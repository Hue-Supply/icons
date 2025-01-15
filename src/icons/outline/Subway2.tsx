import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSubway2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 16.5h.01M5 13h14M7.5 20 6 22m10.5-2 1.5 2M9.5 2 11 6h2l1.5-4m-5 0h-.169c-.247 0-.37 0-.491.02a1.5 1.5 0 0 0-.312.086c-.113.045-.22.109-.431.236L7 3m2.5-1h5M17 3l-1.097-.658c-.212-.127-.318-.19-.431-.236q-.15-.06-.312-.086C15.04 2 14.916 2 14.669 2H14.5M8.8 20h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.72 20 16.88 20 15.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 6 16.88 6 15.2 6H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 8.28 4 9.12 4 10.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20m3.7-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgSubway2;
