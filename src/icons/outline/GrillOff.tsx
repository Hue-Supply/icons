import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrillOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.118 15.698c-.225.017-1.942.034-2.475.034h-3.286c-.533 0-.8 0-1.024-.017A6 6 0 0 1 3.8 10.182c-.017-.224-.017-.49-.017-1.024 0-.133 0-.2.004-.256A1.5 1.5 0 0 1 5.17 7.52c.057-.004.123-.004.256-.004h2.696m5.226 0h5.226c.133 0 .2 0 .256.004a1.5 1.5 0 0 1 1.383 1.383c.004.057.004.123.004.256 0 .533 0 .8-.017 1.024a6 6 0 0 1-.938 2.798M9.75 16.087l-4.156 5.869m1.523-1.886h7.611M12 2v1.76M16.695 2v1.76m1.5 17.887a2.022 2.022 0 1 1-2.546-3.111M2.5 1.696l20 20"
    />
  </svg>
);
export default SvgGrillOff;
