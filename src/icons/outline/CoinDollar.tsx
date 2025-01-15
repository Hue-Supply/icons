import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinDollar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 12h-1.23a2.392 2.392 0 1 1 0-4.785H12M12 12h1.23a2.392 2.392 0 1 1 0 4.785H12M12 12V7.215M12 12v4.785m0-9.57V5.621m0 1.594h1.776c.542 0 1.063.212 1.45.59M12 16.786v1.595m0-1.595h-1.445c-.411 0-.616 0-.818-.028a3 3 0 0 1-.526-.12c-.193-.064-.378-.153-.748-.332l-.086-.042M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgCoinDollar;
