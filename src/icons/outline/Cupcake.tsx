import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCupcake = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.552 16.147c1.206 0 2.183-.864 2.183-1.929v-.964c0-4.26-3.91-7.715-8.734-7.715-4.825 0-8.735 3.454-8.735 7.715v.964c0 1.065.977 1.929 2.183 1.929m13.103 0c-1.206 0-2.184-.864-2.184-1.929 0 1.065-.978 1.929-2.184 1.929s-2.183-.864-2.183-1.929c0 1.065-.978 1.929-2.184 1.929s-2.184-.864-2.184-1.929c0 1.065-.978 1.929-2.184 1.929m13.103 0-.353 1.863c-.263 1.39-.395 2.086-.753 2.606a3 3 0 0 1-1.262 1.046c-.578.255-1.286.255-2.701.255h-2.965c-1.415 0-2.123 0-2.701-.255a3 3 0 0 1-1.263-1.046c-.358-.52-.49-1.216-.752-2.606l-.353-1.863m2.746-10.26a3.804 3.804 0 0 1 7.61 0m-6.832 4.4-.34.773m3.945-1.536-.422-.731m3.473 2.422.746-.396"
    />
  </svg>
);
export default SvgCupcake;
