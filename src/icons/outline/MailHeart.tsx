import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 11.5V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5.5m-7-14.415 7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585m-2.503 10.246c-.8-.91-2.133-1.154-3.135-.322-1.002.833-1.143 2.224-.356 3.209S17.997 22 17.997 22s2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.587-3.136.322"
    />
  </svg>
);
export default SvgMailHeart;
