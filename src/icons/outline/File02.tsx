import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFile02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M14 2.396V6.5A1.5 1.5 0 0 0 15.5 8h4M8 14.504h8m-8 3.452h8M12.133 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.612c0-.778 0-1.167-.092-1.53a3 3 0 0 0-.399-.907c-.206-.313-.492-.576-1.065-1.102l-3.068-2.811c-.508-.467-.763-.7-1.054-.866a3 3 0 0 0-.827-.322C13.168 2 12.823 2 12.133 2Z"
    />
  </svg>
);
export default SvgFile02;
