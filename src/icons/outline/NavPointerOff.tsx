import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointerOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.043 13.682c-.105-.082-.227-.143-.47-.264l-3.73-1.865c-1.473-.737-2.21-1.105-2.408-1.57a1.38 1.38 0 0 1 .082-1.24c.258-.435 1.037-.703 2.595-1.238l11.524-3.962c1.367-.47 2.05-.705 2.501-.546M11.856 17l.566 1.132c.736 1.473 1.105 2.21 1.57 2.408.403.172.864.141 1.24-.083.435-.258.703-1.036 1.238-2.594L19.517 9M2.5 21.5l19-19"
    />
  </svg>
);
export default SvgNavPointerOff;
