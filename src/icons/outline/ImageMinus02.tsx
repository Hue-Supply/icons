import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImageMinus02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M7.196 20.406a1 1 0 0 0 1.608 1.188zm7.995-9.135-.804-.594zm2.946-.298-.669.744.016.014.016.013zM21.8 14l.98.199a1 1 0 0 0-.343-.97zM12 3a1 1 0 1 0 0-2zm4 1.42a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zM10.18 9.5a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-.376 13.094 7.191-9.728-1.608-1.19-7.191 9.73zm8.696-9.85 3.663 3.027 1.274-1.542-3.663-3.026zm-1.505.122a1 1 0 0 1 1.473-.15l1.338-1.486a3 3 0 0 0-4.42.447zM12 21a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.82 1.801A9.004 9.004 0 0 1 12 21v2c5.323 0 9.76-3.78 10.78-8.801zM16 6.42h6v-2h-6z"
    />
  </svg>
);
export default SvgImageMinus02;
