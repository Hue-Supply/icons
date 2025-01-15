import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailEdit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 11V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5.5m-7-14.415 7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585m-2.81 9.846.707-.707c.328-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.17.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.335-.592.664l-.707.707m-2.829-2.828-2.668 2.668c-.19.191-.286.287-.362.395q-.101.146-.166.31c-.049.124-.075.257-.128.521l-.33 1.647c-.078.393-.117.59-.06.73a.5.5 0 0 0 .272.271c.14.058.337.019.73-.06l1.646-.33c.265-.052.398-.079.521-.127q.166-.065.31-.166c.11-.076.205-.172.396-.363l2.668-2.668m-2.829-2.828 2.829 2.828"
    />
  </svg>
);
export default SvgMailEdit;
