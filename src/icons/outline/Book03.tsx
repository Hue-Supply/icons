import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBook03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 16H8c-.93 0-1.396 0-1.777.102a3 3 0 0 0-2.121 2.122 3 3 0 0 0-.084.579M8.8 22h8.8c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C18.861 2 18.441 2 17.6 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22ZM10 2h6.05v7.512c0 .484 0 .726-.1.86a.5.5 0 0 1-.368.197c-.167.01-.369-.123-.772-.39l-1.343-.887c-.16-.106-.24-.159-.326-.179a.5.5 0 0 0-.231 0c-.087.02-.166.073-.326.179l-1.343.888c-.403.266-.605.4-.772.39a.5.5 0 0 1-.368-.199C10 10.238 10 9.996 10 9.512z"
    />
  </svg>
);
export default SvgBook03;
