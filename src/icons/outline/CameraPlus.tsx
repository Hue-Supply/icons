import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraPlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 12.75V9.257c0-.239 0-.358-.007-.458a3 3 0 0 0-2.792-2.792C18.101 6 17.981 6 17.744 6l-.192-.001a3 3 0 0 1-1.979-.828l-.198-.177c-.267-.239-.4-.358-.543-.458a3 3 0 0 0-1.381-.528c-.173-.02-.352-.02-.71-.02h-1.482c-.358 0-.537 0-.71.02a3 3 0 0 0-1.381.528c-.142.1-.276.22-.543.458l-.198.177a3 3 0 0 1-1.979.827C6.401 6 6.353 6 6.257 6c-.239 0-.358 0-.458.007a3 3 0 0 0-2.792 2.792C3 8.899 3 9.019 3 9.257V14.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327H12m4.063-.469h2.968m0 0H22m-2.969 0v-2.968m0 2.968v2.97M15.5 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
  </svg>
);
export default SvgCameraPlus;
