import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenMonsterMouth = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m4 9.5 2 4L8 9m12 .5-2 4L16 9m1 3s-3.038.5-5 .5-5-.5-5-.5m5-2.5c-1.446 0-3.174-.335-4.783-.76C4.682 8.07 2 9.88 2 12.503c0 2.152 1.838 3.847 3.987 3.718C7.904 16.107 10.177 16 12 16c1.824 0 4.096.107 6.013.221 2.149.13 3.987-1.566 3.987-3.718 0-2.622-2.682-4.432-5.217-3.763-1.61.425-3.337.76-4.783.76"
    />
  </svg>
);
export default SvgHalloweenMonsterMouth;
