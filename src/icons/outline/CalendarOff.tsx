import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 25"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 22.04H7.8c-1.68 0-2.52 0-3.162-.327A3 3 0 0 1 3.327 20.4C3 19.76 3 18.92 3 17.24v-8.4c0-.568 0-.4.013-.8m17.66 12.362C21 19.76 21 18.92 21 17.24v-8.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4.04 17.88 4.04 16.2 4.04H7.8c-1.68 0-2.52 0-3.162.327M8 2.04v2m8-2v4m-6 4h11m-18 0h2m-3-8 20 20"
    />
  </svg>
);
export default SvgCalendarOff;
