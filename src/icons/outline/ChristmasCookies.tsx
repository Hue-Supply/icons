import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasCookies = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.619 13.577a1 1 0 0 0 .771 1.846zM8.575 5.615a1 1 0 0 0 1.846.77zm1.904 6.507a1 1 0 1 0-.958 1.756zm-.95 1.76a1 1 0 0 0 .959-1.755zm-3.05.24a1 1 0 1 0-.958 1.756zm-.95 1.76a1 1 0 0 0 .959-1.755zm4.95 1.24a1 1 0 1 0-.958 1.756zm-.95 1.76a1 1 0 1 0 .959-1.755zm6.528-13.877a1 1 0 0 0-.114 1.997zm-.104 1.998a1 1 0 0 0 .114-1.997zm2.245 2.521a1 1 0 1 0-.115 1.997zm-.105 1.997a1 1 0 0 0 .115-1.996zM14 15.5A5.5 5.5 0 0 1 8.5 21v2a7.5 7.5 0 0 0 7.5-7.5zM8.5 21A5.5 5.5 0 0 1 3 15.5H1A7.5 7.5 0 0 0 8.5 23zM3 15.5A5.5 5.5 0 0 1 8.5 10V8A7.5 7.5 0 0 0 1 15.5zM8.5 10a5.5 5.5 0 0 1 5.5 5.5h2A7.5 7.5 0 0 0 8.5 8zm7-7A5.5 5.5 0 0 1 21 8.5h2A7.5 7.5 0 0 0 15.5 1zM21 8.5a5.5 5.5 0 0 1-3.381 5.077l.771 1.846A7.5 7.5 0 0 0 23 8.5zM10.421 6.385A5.5 5.5 0 0 1 15.5 3V1a7.5 7.5 0 0 0-6.925 4.615zm-.9 7.493.009.005.958-1.756-.009-.005zm-4 2 .009.005.958-1.756-.009-.005zm4 3 .009.005.958-1.756-.009-.005zm6.422-11.876h.01l.114-1.996h-.01zm2.14 4.519h.01l.115-1.996-.01-.001z"
    />
  </svg>
);
export default SvgChristmasCookies;
