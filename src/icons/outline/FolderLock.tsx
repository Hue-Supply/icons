import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderLock = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M2 7h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2zm0 0h13l-1.09-1.744c-.515-.824-.772-1.235-1.12-1.534a3 3 0 0 0-1.056-.585C11.296 3 10.811 3 9.84 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2zm11.6 6.2v-1.6a1.6 1.6 0 1 0-3.2 0v1.6m-.064 4.8h3.328c.538 0 .806 0 1.012-.105a.96.96 0 0 0 .42-.42c.104-.205.104-.473.104-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.205-.104-.473-.104-1.011-.104h-3.328c-.538 0-.806 0-1.012.105a.96.96 0 0 0-.42.42c-.104.205-.104.473-.104 1.011v1.728c0 .538 0 .806.105 1.012a.96.96 0 0 0 .42.42c.205.104.473.104 1.011.104Z"
    />
  </svg>
);
export default SvgFolderLock;
