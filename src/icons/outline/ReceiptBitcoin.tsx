import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReceiptBitcoin = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.648 7.22h4.635a2.068 2.068 0 0 1 0 4.136m0 0H9.905m3.378 0a2.068 2.068 0 1 1 0 4.137H8.648m1.182-9.39v10.275m3.533-.885v.885m0-10.276V7.22m4.19 13.038c-.437-.938-1.756-.99-2.259-.087l-.099.18c-.479.86-1.743.78-2.109-.135-.392-.98-1.78-.98-2.172 0-.366.916-1.63.996-2.109.134l-.1-.179c-.502-.904-1.82-.85-2.258.087C5.867 21.497 4 21.1 4 19.73V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8v11.931c0 1.37-1.868 1.766-2.447.526"
    />
  </svg>
);
export default SvgReceiptBitcoin;
