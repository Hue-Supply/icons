import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNote03Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.262 10.53v2.94m11.51-2.94v2.94M13.539 9H13a1 1 0 0 1-1-1m0 7h.271c.462 0 .876-.209 1.15-.537M12 15h-1.582M12 15v1m-1.771-5.5a1.5 1.5 0 0 0 1.5 1.5M1.75 2l20 20M4.45 5.004c-.646.01-1.039.051-1.358.214a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19h13.34m3.459-2.634L22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5h-8.775"
    />
  </svg>
);
export default SvgBankNote03Off;
