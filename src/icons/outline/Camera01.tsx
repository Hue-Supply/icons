import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCamera01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 9.257c0-.239 0-.358.007-.458a3 3 0 0 1 2.792-2.792C5.899 6 6.019 6 6.257 6l.191-.001a3 3 0 0 0 1.979-.828l.198-.177c.267-.239.4-.358.543-.458a3 3 0 0 1 1.381-.528c.173-.02.352-.02.71-.02h1.482c.358 0 .537 0 .71.02a3 3 0 0 1 1.381.528c.142.1.276.22.543.458l.198.177a3 3 0 0 0 2.17.829c.239 0 .358 0 .458.007a3 3 0 0 1 2.792 2.792c.007.1.007.22.007.458V14.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.22 3 16.38 3 14.7z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
    />
  </svg>
);
export default SvgCamera01;
