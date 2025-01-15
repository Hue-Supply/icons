import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSoundcloud = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.5 6v13m-3-11v11m-3-6.157v4.314m14.538-6.718h.182a4.28 4.28 0 1 1 0 8.561h-3.905c-.672 0-1.008 0-1.265-.13a1.2 1.2 0 0 1-.525-.525c-.13-.257-.13-.593-.13-1.265V6.92c0-.61 0-.915.193-1.213.137-.212.486-.458.732-.516.345-.081.55-.008.957.138 2.121.759 3.724 2.746 3.724 5.073 0 .02.016.037.037.037"
    />
  </svg>
);
export default SvgSoundcloud;
