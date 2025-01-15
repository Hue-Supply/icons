import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMonitor01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 3 5.12 3 6.8 3h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 5.28 22 6.12 22 7.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 17 18.88 17 17.2 17H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 14.72 2 13.88 2 12.2zM9.707 17.317c.089-.064.133-.096.179-.124.177-.108.374-.172.577-.189.052-.004.106-.004.212-.004h2.65c.107 0 .16 0 .212.004.203.017.4.081.577.189.046.027.09.06.18.124.832.599 1.249.898 1.398 1.108.62.87.263 2.137-.698 2.49-.232.085-.733.085-1.734.085h-2.52c-1.001 0-1.502 0-1.734-.085-.961-.353-1.317-1.62-.698-2.49.15-.21.566-.51 1.399-1.108"
    />
  </svg>
);
export default SvgMonitor01;
