import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMagicWand = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m10.657 10.53-7.038 7.038a2 2 0 1 0 2.828 2.829l7.038-7.038m-2.828-2.829 1.414-1.414c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.336.263.664.592.33.329.494.493.592.664a1.5 1.5 0 0 1 0 1.5c-.098.171-.263.336-.592.665l-1.414 1.414m-2.828-2.829 2.828 2.829m-2.853-7.682L9.154 4.199m10.642 10.64-1.478-1.479M19.796 4.2l-1.478 1.478M22 9.518h-2.09m-5.434-7.522v2.09"
    />
  </svg>
);
export default SvgMagicWand;
