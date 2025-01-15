import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWallet02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 14.5v2.3c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 20 17.92 20 16.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v2.042m-2.6 5.217h2.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.321.163-.741.163-1.581v-.118c0-.84 0-1.26-.163-1.58a1.5 1.5 0 0 0-.656-.656c-.32-.164-.74-.164-1.581-.164h-2.2c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.655.655c-.164.321-.164.741-.164 1.581v.118c0 .84 0 1.26.164 1.58a1.5 1.5 0 0 0 .655.656c.32.164.74.164 1.581.164"
    />
  </svg>
);
export default SvgWallet02;
