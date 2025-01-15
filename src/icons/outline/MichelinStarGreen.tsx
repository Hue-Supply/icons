import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMichelinStarGreen = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m11.637 17.61.422 1.456c.053.184.08.275.162.46.042.095.201.383.26.47.113.167.117.171.125.18 1.948 2.176 5.838.382 5.12-2.73l-.415-1.8 1.848-.033c3.413-.059 4.093-4.862.832-5.866l-1.779-.548.912-1.65c1.65-2.985-2.17-5.97-4.668-3.648l-1.38 1.283-.962-1.593C10.352.668 5.855 2.488 6.622 5.814l.416 1.801-1.849.032c-3.193.055-3.994 4.264-1.412 5.628.01.006.016.008.206.078.098.036.415.121.518.14a3 3 0 0 0 .485.045l1.514.058m4.793-1.32C9.202 15.942 5.837 19.194 1.951 22"
    />
  </svg>
);
export default SvgMichelinStarGreen;
