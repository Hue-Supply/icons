import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.02 8v-.156c0-1.535 0-2.302-.288-2.91a3 3 0 0 0-1.168-1.29c-.576-.347-1.34-.424-2.867-.576l-5.4-.54c-1.83-.183-2.744-.275-3.45.026a3 3 0 0 0-1.46 1.32c-.368.673-.368 1.592-.368 3.43v9.392c0 1.838 0 2.757.369 3.43a3 3 0 0 0 1.458 1.32c.707.3 1.622.21 3.45.026l5.401-.54c1.528-.152 2.292-.229 2.869-.575a3 3 0 0 0 1.167-1.291c.288-.609.287-1.377.287-2.912V16m-9.496-4 4.269 4.27M8.523 12l4.27-4.27M8.523 12h12.478"
    />
  </svg>
);
export default SvgLogin06;
