import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTransferIn = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 17.717h6.675m0 0h.037m-.037 0a.1.1 0 0 1-.027.066L6.58 21m3.095-3.283a.1.1 0 0 0-.027-.067L6.58 14.433M12.879 21h3.318c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162v-3.9c0-1.031 0-1.547-.122-2.03a4 4 0 0 0-.527-1.203c-.271-.417-.65-.767-1.408-1.467l-3.686-3.406c-1.149-1.06-1.723-1.591-2.375-1.792a3 3 0 0 0-1.764 0c-.652.2-1.227.731-2.375 1.792L5.054 7.6c-.758.7-1.137 1.05-1.409 1.467a4 4 0 0 0-.526 1.203c-.086.34-.111.695-.119 1.234"
    />
  </svg>
);
export default SvgTransferIn;
