import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMilk = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.01 5.907h9.98l.941 2.428c.27.694.404 1.042.5 1.399q.125.477.18.967c.041.368.041.74.041 1.485v6.245c0 1.241 0 1.862-.241 2.337a2.2 2.2 0 0 1-.97.969c-.474.242-1.095.242-2.337.242H8.896c-1.242 0-1.863 0-2.338-.242a2.2 2.2 0 0 1-.969-.97c-.241-.474-.241-1.094-.241-2.336v-6.245c0-.745 0-1.117.04-1.485q.056-.49.182-.967c.094-.357.23-.705.499-1.399zM7.052 4.682c0-.931 0-1.397.181-1.752.16-.313.414-.568.727-.727.356-.182.821-.182 1.753-.182h4.574c.932 0 1.397 0 1.753.182.313.16.567.414.727.727.181.355.181.821.181 1.752v1.225H7.052z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.412 13.943a2.413 2.413 0 1 1-4.826 0 2.413 2.413 0 0 1 4.826 0"
    />
  </svg>
);
export default SvgMilk;
