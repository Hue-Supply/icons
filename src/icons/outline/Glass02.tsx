import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlass02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M19.127 4.203c0 1.23-2.743 2.228-6.126 2.228s-6.127-.998-6.127-2.228S9.617 1.975 13 1.975s6.126.997 6.126 2.228"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.127 4.203.458 5.042c.056.614.084.92.085 1.175a6 6 0 0 1-5.492 6.014c-.254.021-.562.021-1.178.021m6.127-12.252c0 1.23-2.743 2.228-6.126 2.228s-6.127-.998-6.127-2.228m12.253 0c0-1.23-2.743-2.228-6.126-2.228s-6.127.997-6.127 2.228m0 0-.459 5.042c-.055.614-.083.92-.085 1.175a6 6 0 0 0 5.492 6.014c.254.021.562.021 1.178.021m0 0v5.57m0 0h3.9m-3.9 0H9.103M6.874 10.572s2.042-1.888 6.127 0c4.084 1.888 6.126 0 6.126 0"
    />
  </svg>
);
export default SvgGlass02;
