import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBasket = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m17.212 9.52-1.226-3.617c-.266-.787-.4-1.18-.606-1.497a3 3 0 0 0-1.769-1.268c-.366-.094-.781-.094-1.612-.094-.83 0-1.245 0-1.612.094A3 3 0 0 0 8.62 4.406c-.207.317-.34.71-.607 1.497L6.786 9.519M7.996 21h8.007c1.422 0 2.133 0 2.713-.256a3 3 0 0 0 1.264-1.053c.357-.524.486-1.223.744-2.621l.73-3.966c.36-1.947.539-2.92.267-3.68a3 3 0 0 0-1.319-1.584c-.699-.406-1.688-.406-3.668-.406h-9.47c-1.979 0-2.969 0-3.667.406a3 3 0 0 0-1.319 1.584c-.272.76-.093 1.733.266 3.68l.731 3.966c.258 1.398.387 2.097.744 2.621a3 3 0 0 0 1.264 1.053c.58.256 1.29.256 2.713.256m6.503-6.783a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </svg>
);
export default SvgShoppingBasket;
