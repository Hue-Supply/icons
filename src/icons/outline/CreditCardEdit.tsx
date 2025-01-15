import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardEdit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.41 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 7.28 22 8.12 22 9.8v.144M2 10h20m-4.31 5.43.706-.706c.33-.329.494-.493.665-.592a1.5 1.5 0 0 1 1.5 0c.17.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.335-.592.664l-.707.707m-2.829-2.828-2.668 2.668c-.19.191-.286.287-.362.395q-.102.146-.166.31c-.049.124-.075.257-.128.521l-.33 1.647c-.078.393-.118.59-.06.73a.5.5 0 0 0 .271.271c.14.058.337.019.73-.06l1.647-.33c.265-.052.397-.079.52-.127q.166-.065.311-.166c.109-.076.204-.171.395-.363l2.669-2.668m-2.829-2.828 2.829 2.828"
    />
  </svg>
);
export default SvgCreditCardEdit;
