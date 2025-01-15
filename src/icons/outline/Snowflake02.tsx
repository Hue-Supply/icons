import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSnowflake02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 17V7m0 10-4.558 5M12 17l4.559 5M12 17v5m0-15L7.442 2M12 7l4.559-5M12 7V2M7 12h10M7 12 2 7.442M7 12l-5 4.558M7 12H2m15 0 5-4.558M17 12l5 4.558M17 12h5"
    />
  </svg>
);
export default SvgSnowflake02;
