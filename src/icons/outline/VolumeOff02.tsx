import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeOff02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.5 8 5.352-3.633c1.336-.92 2.004-1.38 2.563-1.367a1.67 1.67 0 0 1 1.241.58C18 3.99 18 4.761 18 6.305V18m-2.5 2.5c-.468-.195-1.069-.61-1.982-1.238l-4.253-2.928c-.222-.153-.333-.23-.455-.283a1.5 1.5 0 0 0-.34-.105c-.133-.024-.272-.024-.548-.024h-.655c-.91 0-1.365 0-1.713-.164a1.57 1.57 0 0 1-.71-.659c-.177-.323-.177-.745-.177-1.59v-2.892c0-.382 0-.677.016-.916M1.75 2l20 20"
    />
  </svg>
);
export default SvgVolumeOff02;
