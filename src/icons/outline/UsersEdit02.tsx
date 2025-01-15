import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersEdit02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 21H4v-1.33a4.06 4.06 0 0 1 3.076-3.939A20.3 20.3 0 0 1 11 15.15m5.677-.735.707-.707c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.336.263.664.592.33.329.494.493.592.664a1.5 1.5 0 0 1 0 1.5c-.098.171-.263.336-.592.664l-.707.708m-2.828-2.829-2.668 2.668c-.191.191-.287.287-.363.396q-.101.145-.166.31c-.048.123-.075.256-.128.52l-.329 1.647c-.079.393-.118.59-.06.73a.5.5 0 0 0 .27.271c.141.058.338.019.731-.06l1.647-.329c.264-.053.397-.08.52-.128a1.5 1.5 0 0 0 .31-.166c.11-.076.205-.171.396-.362l2.668-2.668m-2.828-2.829 2.828 2.829M19 3.666c1.22.825 2 2.086 2 3.5 0 .925-.334 1.784-.907 2.5M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsersEdit02;
