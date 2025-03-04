import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBadgeShape = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#badge-shape_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.504 3.026c.573-.465.859-.698 1.152-.845a3 3 0 0 1 2.686 0c.293.147.58.38 1.152.845.22.178.33.267.445.344a3 3 0 0 0 1.084.45c.136.026.276.04.558.07.733.076 1.1.114 1.412.218a3 3 0 0 1 1.898 1.899c.104.311.142.678.218 1.412.03.28.044.421.071.557a3 3 0 0 0 .449 1.084c.077.116.166.225.344.445.465.572.698.859.845 1.152a3 3 0 0 1 0 2.686c-.147.293-.38.58-.845 1.152-.178.22-.267.33-.344.445a3 3 0 0 0-.449 1.084 6 6 0 0 0-.07.557c-.077.734-.115 1.101-.219 1.412a3 3 0 0 1-1.898 1.9c-.312.103-.679.14-1.412.217-.282.03-.422.044-.558.07-.388.078-.756.23-1.084.45-.116.077-.225.166-.445.344-.572.465-.859.698-1.152.845a3 3 0 0 1-2.686 0c-.293-.147-.58-.38-1.152-.845a6 6 0 0 0-.445-.344 3 3 0 0 0-1.084-.45 6 6 0 0 0-.557-.07c-.734-.076-1.101-.114-1.412-.218a3 3 0 0 1-1.9-1.899c-.103-.311-.14-.678-.217-1.412a6 6 0 0 0-.07-.557 3 3 0 0 0-.45-1.084c-.077-.116-.166-.225-.344-.445-.465-.573-.698-.859-.844-1.152a3 3 0 0 1 0-2.686c.146-.293.379-.58.844-1.152.178-.22.267-.33.344-.445a3 3 0 0 0 .45-1.084c.026-.136.04-.276.07-.557.076-.734.114-1.101.218-1.412a3 3 0 0 1 1.899-1.9c.311-.103.678-.14 1.412-.217.28-.03.421-.044.557-.07a3 3 0 0 0 1.084-.45c.116-.077.225-.166.445-.344"
      />
    </g>
    <defs>
      <clipPath id="badge-shape_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeShape;
