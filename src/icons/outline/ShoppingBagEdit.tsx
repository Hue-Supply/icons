import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBagEdit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M19.932 10.003c-.132-.935-.25-1.486-.527-1.924a3 3 0 0 0-1.281-1.125c-.598-.276-1.345-.276-2.838-.276H8.715c-1.493 0-2.24 0-2.837.276a3 3 0 0 0-1.282 1.125c-.351.557-.448 1.297-.64 2.778l-.748 5.722c-.244 1.872-.366 2.808-.076 3.535a3 3 0 0 0 1.32 1.504C5.136 22 6.08 22 7.969 22h2.03M16 9.404V6a4 4 0 0 0-8 0v3.404m9.69 6.027.706-.707c.33-.329.494-.493.665-.592a1.5 1.5 0 0 1 1.5 0c.17.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.335-.592.664l-.707.707m-2.829-2.828-2.668 2.668c-.19.191-.286.287-.362.395q-.102.146-.166.31c-.049.124-.075.257-.128.521l-.33 1.647c-.078.393-.118.59-.06.73a.5.5 0 0 0 .271.271c.14.058.337.019.73-.06l1.647-.33c.265-.052.397-.079.52-.127q.166-.065.311-.166c.109-.076.204-.171.395-.363l2.669-2.668m-2.829-2.828 2.829 2.828"
    />
  </svg>
);
export default SvgShoppingBagEdit;
