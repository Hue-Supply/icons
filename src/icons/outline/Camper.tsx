import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCamper = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 16H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 14.48 2 13.92 2 12.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h12.5a1.8 1.8 0 0 1 1.8 1.8v1.45c0 .69-.56 1.25-1.25 1.25S17 9.06 17 9.75zm0 0h3.6c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-1.476c0-.413 0-.62-.052-.811q-.068-.256-.221-.474c-.114-.162-.273-.294-.59-.559l-1.47-1.224c-.247-.206-.37-.309-.509-.382a1.5 1.5 0 0 0-.39-.142c-.154-.032-.315-.032-.637-.032H17zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4m11 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4M5 7h5v4H5z"
    />
  </svg>
);
export default SvgCamper;
