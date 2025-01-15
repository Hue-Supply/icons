import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSave = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 20v-3.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 13 14.92 13 13.8 13h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 14.52 7 15.08 7 16.2V20M7 4v.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 8 9.08 8 10.2 8h3.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C17 6.48 17 5.92 17 4.8V4m-1.988-1H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V8.988c0-.734 0-1.1-.083-1.446a3 3 0 0 0-.36-.867c-.185-.303-.444-.562-.963-1.08l-1.188-1.19c-.519-.518-.778-.777-1.081-.963a3 3 0 0 0-.867-.36C16.112 3 15.746 3 15.012 3"
    />
  </svg>
);
export default SvgSave;
