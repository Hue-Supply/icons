import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileLock03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14 2.396V6.5A1.5 1.5 0 0 0 15.5 8h4.173M13.8 13.2v-1.6a1.6 1.6 0 1 0-3.2 0v1.6M12.133 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.612c0-.778 0-1.167-.092-1.53a3 3 0 0 0-.399-.907c-.206-.313-.492-.576-1.065-1.102l-3.068-2.811c-.508-.467-.763-.7-1.054-.866a3 3 0 0 0-.827-.322C13.168 2 12.823 2 12.133 2Zm-1.597 16h3.328c.538 0 .806 0 1.012-.105a.96.96 0 0 0 .42-.42c.104-.205.104-.473.104-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.204-.104-.473-.104-1.011-.104h-3.328c-.538 0-.806 0-1.012.105a.96.96 0 0 0-.42.42C9 13.93 9 14.197 9 14.735v1.728c0 .538 0 .806.105 1.012a.96.96 0 0 0 .42.42c.205.104.473.104 1.011.104Z"
    />
  </svg>
);
export default SvgFileLock03;
