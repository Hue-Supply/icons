import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinsHand02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m6 13.901 3.58-1.37c.42-.16.63-.24.846-.288q.289-.064.585-.07c.222-.005.445.024.89.08l4.386.56a1.713 1.713 0 0 1-.217 3.412h-1.795M6 19.407h1.191c.433 0 .65 0 .862.03q.283.04.553.134c.202.07.395.17.78.367l.856.44c.521.268.782.403 1.058.483q.368.107.752.12c.287.008.576-.04 1.155-.134l3.439-.559c.417-.067.626-.101.825-.163q.267-.083.514-.213c.185-.098.356-.221.699-.469l2.578-1.86A1.78 1.78 0 0 0 22 16.142c0-1.383-1.508-2.237-2.694-1.527l-2.114 1.265M14.693 3.272a3.168 3.168 0 1 0-.676 4.46M4 21c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C2 19.697 2 19.464 2 19v-5c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C3.304 12 3.536 12 4 12s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C6 13.303 6 13.536 6 14v5c0 .465 0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C4.696 21 4.464 21 4 21M20.012 6.28a3.168 3.168 0 1 1-6.337 0 3.168 3.168 0 0 1 6.337 0"
    />
  </svg>
);
export default SvgCoinsHand02;
