import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDataflow01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 4V3zm1.638 15.673.454-.891zm-1.311-1.311-.891.454zM19 5a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 9a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM5 5a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zM4 4a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm13 17a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM7 5h5V3H7zm5 0h5V3h-5zm4.8 16h.2v-2h-.2zM11 4v8h2V4zm0 8v3.2h2V12zm1 1h5v-2h-5zm4.8 6c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18l-.908 1.782c.485.247 1.002.346 1.564.392.55.045 1.228.044 2.052.044zM11 15.2c0 .824 0 1.501.044 2.052.046.562.145 1.079.392 1.564l1.782-.908c-.08-.156-.145-.38-.18-.819C13 16.639 13 16.057 13 15.2zm3.092 3.582a2 2 0 0 1-.874-.874l-1.782.908a4 4 0 0 0 1.748 1.748z"
    />
  </svg>
);
export default SvgDataflow01;
