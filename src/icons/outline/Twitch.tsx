import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTwitch = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.691 8.26v3.827m-3.16-3.827v3.827M7.5 17.222H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 15.702 3 15.142 3 14.022V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 5.52 21 6.08 21 7.2v5.299c0 .679 0 1.019-.072 1.34a3 3 0 0 1-.359.899c-.17.282-.404.527-.873 1.02-.5.525-.751.788-1.045.979-.29.188-.609.325-.945.405-.34.08-.704.08-1.43.08h-3.11c-.432 0-.648 0-.854.044a2 2 0 0 0-.523.19c-.186.1-.35.238-.681.515l-2.294 1.926c-.419.351-.628.527-.805.53a.5.5 0 0 1-.398-.185c-.111-.137-.111-.411-.111-.958z"
    />
  </svg>
);
export default SvgTwitch;
