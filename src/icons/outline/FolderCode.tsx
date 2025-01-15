import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderCode = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 7h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2zm0 0h13l-1.09-1.744c-.515-.824-.772-1.235-1.12-1.534a3 3 0 0 0-1.056-.585C11.296 3 10.811 3 9.84 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2zm8.023 4.518L7.98 13.559a.62.62 0 0 0 0 .877l2.042 2.042m3.954-4.96 2.042 2.041a.62.62 0 0 1 0 .877l-2.041 2.042"
    />
  </svg>
);
export default SvgFolderCode;
