import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeOff01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.244 7.75 3.927-2.911c1.233-.915 1.85-1.372 2.366-1.36a1.5 1.5 0 0 1 1.146.578C16 4.463 16 5.23 16 6.767V16m-2 4.39c-.432-.194-.987-.606-1.83-1.232l-3.926-2.912c-.205-.152-.307-.228-.42-.282a1.3 1.3 0 0 0-.314-.104c-.122-.024-.25-.024-.505-.024H6.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C4 14.697 4 14.277 4 13.437v-2.878c0-.38 0-.673.015-.911M20 8s1.5 1.5 1.5 4-1.5 4-1.5 4M1.75 2l20 20"
    />
  </svg>
);
export default SvgVolumeOff01;
