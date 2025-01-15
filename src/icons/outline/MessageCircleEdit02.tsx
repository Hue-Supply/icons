import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleEdit02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.773 9.98a9 9 0 1 0-17.294 4.922c.256.754.34 1.57.092 2.325l-.75 2.276a1.5 1.5 0 0 0 1.747 1.934l3.55-.778c.551-.12 1.122-.072 1.668.067q.335.084.678.143m7.222-5.409.707-.707c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.335-.592.664l-.707.707m-2.828-2.828-2.668 2.668c-.191.191-.287.287-.363.395a1.5 1.5 0 0 0-.166.31c-.048.124-.075.257-.128.522L14.031 21c-.078.393-.117.59-.059.73a.5.5 0 0 0 .27.271c.141.058.338.019.731-.06l1.647-.33c.264-.052.397-.078.52-.127q.165-.065.31-.166c.11-.076.205-.171.396-.362l2.668-2.669m-2.828-2.828 2.828 2.828"
    />
  </svg>
);
export default SvgMessageCircleEdit02;
