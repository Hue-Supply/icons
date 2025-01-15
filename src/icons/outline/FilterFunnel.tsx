import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilterFunnel = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 6.052c0-.98 0-1.471.168-1.855a2 2 0 0 1 1.03-1.029C3.58 3 4.07 3 5.051 3h13.896c.98 0 1.471 0 1.855.168a2 2 0 0 1 1.029 1.03C22 4.58 22 5.07 22 6.051v0c0 .321 0 .482-.032.634-.038.183-.11.357-.212.513-.085.13-.2.244-.426.471l-5.627 5.627c-.26.26-.39.39-.482.54q-.124.204-.18.434c-.041.173-.041.356-.041.723v1.1c0 1.018 0 1.526-.146 1.978a3 3 0 0 1-.75 1.212c-.338.333-.793.56-1.702 1.015v0c-1.086.543-1.63.815-2.071.764a1.5 1.5 0 0 1-1.088-.672C9 20.018 9 19.41 9 18.197v-3.203c0-.367 0-.55-.041-.723a1.5 1.5 0 0 0-.18-.433c-.093-.152-.223-.281-.482-.54L2.67 7.67c-.227-.227-.34-.34-.426-.47a1.5 1.5 0 0 1-.212-.514C2 6.534 2 6.373 2 6.052"
    />
  </svg>
);
export default SvgFilterFunnel;
