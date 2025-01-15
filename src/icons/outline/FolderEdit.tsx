import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderEdit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 7h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 9.32 22 11M2 7v9.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h3.81M2 7h13l-1.09-1.744c-.515-.824-.772-1.235-1.12-1.534a3 3 0 0 0-1.056-.585C11.296 3 10.811 3 9.84 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2zm15.747 8.455.707-.707c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.335.263.664.592.33.329.494.493.592.664a1.5 1.5 0 0 1 0 1.5c-.098.171-.263.336-.592.665l-.707.707m-2.828-2.829-2.668 2.668c-.191.191-.287.287-.363.396q-.101.145-.166.31c-.048.123-.075.256-.128.52l-.329 1.647c-.079.394-.118.59-.06.73a.5.5 0 0 0 .27.271c.141.058.338.02.731-.06l1.647-.329c.264-.053.397-.08.52-.128q.166-.065.31-.166c.11-.076.205-.171.396-.362l2.668-2.668m-2.828-2.829 2.828 2.829"
    />
  </svg>
);
export default SvgFolderEdit;
