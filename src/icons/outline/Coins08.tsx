import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins08 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 4c0 1.105 2.462 2 5.5 2S22 5.105 22 4M11 4c0-1.105 2.462-2 5.5-2s5.5.895 5.5 2M11 4v3m11-3v16c0 1.105-2.462 2-5.5 2M2 12c0 1.105 2.462 2 5.5 2s5.5-.895 5.5-2M2 12c0-1.105 2.462-2 5.5-2s5.5.895 5.5 2M2 12v8c0 1.105 2.462 2 5.5 2s5.5-.895 5.5-2v-8m3.5-2c3.038 0 5.5-.895 5.5-2M2 16c0 1.105 2.462 2 5.5 2s5.5-.895 5.5-2m3.5-2c3.038 0 5.5-.895 5.5-2m-5.5 6c3.038 0 5.5-.895 5.5-2"
    />
  </svg>
);
export default SvgCoins08;
