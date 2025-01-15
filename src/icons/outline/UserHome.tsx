import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserHome = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.5 21.046s.611-3.998 5.5-3.998 5.5 3.998 5.5 3.998m-2.406-9.282a3.094 3.094 0 1 1-6.188 0 3.094 3.094 0 0 1 6.188 0M6.8 22c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2v-5.8c0-.88 0-1.32.115-1.724a3 3 0 0 1 .495-.99c.254-.334.606-.598 1.31-1.126l5.2-3.9c1.033-.775 1.55-1.162 2.116-1.311a3 3 0 0 1 1.528 0c.567.15 1.083.536 2.116 1.311l5.2 3.9c.704.528 1.056.792 1.31 1.127.225.296.392.631.495.99.115.403.115.843.115 1.723v5.8c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 22 18.88 22 17.2 22z"
    />
  </svg>
);
export default SvgUserHome;
