import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderMusic = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M2 7h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2zm0 0h13l-1.09-1.744c-.515-.824-.772-1.235-1.12-1.534a3 3 0 0 0-1.056-.585C11.296 3 10.811 3 9.84 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2zm10.264 5.028 1.596-.532a.15.15 0 0 0 .102-.142.3.3 0 0 0-.299-.299h-.55a.85.85 0 0 0-.849.85zm0 0v2.99m0 0v.848c0 .626-.507 1.133-1.132 1.133h-.141a.99.99 0 1 1 0-1.981z"
    />
  </svg>
);
export default SvgFolderMusic;
