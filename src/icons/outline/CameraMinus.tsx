import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraMinus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 12.75V9.256c0-.238 0-.357-.007-.457a3 3 0 0 0-2.792-2.792C18.101 6 17.981 6 17.744 6c-.097 0-.145 0-.192-.002a3 3 0 0 1-1.979-.827l-.198-.177c-.267-.239-.4-.358-.543-.458a3 3 0 0 0-1.381-.528c-.173-.02-.352-.02-.71-.02h-1.482c-.358 0-.537 0-.71.02a3 3 0 0 0-1.381.528c-.142.1-.276.22-.543.458l-.198.177-.144.127A3 3 0 0 1 6.257 6c-.239 0-.358 0-.458.007a3 3 0 0 0-2.792 2.792C3 8.899 3 9.019 3 9.256V14.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328H12m9-6.738V9.268c0-.238 0-.357-.007-.458a3 3 0 0 0-2.792-2.792c-.1-.006-.22-.006-.457-.006-.097 0-.145 0-.192-.002a3 3 0 0 1-1.979-.827l-.198-.177c-.267-.239-.4-.358-.543-.458a3 3 0 0 0-1.381-.528C13.278 4 13.099 4 12.74 4h-1.482c-.358 0-.537 0-.71.02a3 3 0 0 0-1.381.528c-.142.1-.276.22-.543.458l-.198.177-.144.126a3 3 0 0 1-1.835.701c-.047.002-.095.002-.191.002-.239 0-.358 0-.458.006A3 3 0 0 0 3.007 8.81C3 8.91 3 9.03 3 9.268v5.444c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328H12m5.393-1.575H22M15.5 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
  </svg>
);
export default SvgCameraMinus;
