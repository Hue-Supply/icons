import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#edit-01_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.84 18.27c.136-.377.204-.565.295-.742q.12-.234.283-.445c.12-.158.262-.3.545-.583L17.712 2.752a2.503 2.503 0 0 1 3.54 0v0a2.503 2.503 0 0 1 0 3.54L7.504 20.039c-.284.284-.426.426-.583.546q-.211.162-.446.283c-.177.091-.366.16-.743.295l-.68.244c-1.224.439-1.836.659-2.236.52a1.2 1.2 0 0 1-.741-.741c-.138-.4.081-1.012.521-2.235z"
      />
    </g>
    <defs>
      <clipPath id="edit-01_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEdit01;
