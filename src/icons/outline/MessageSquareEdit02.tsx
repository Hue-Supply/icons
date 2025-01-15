import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareEdit02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 10.376V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.221.113.466.187.761.235.494.081.74.121.876.18.383.165.589.406.69.812.035.143.035.33.035.703 0 .578 0 .867.072 1.065a1.2 1.2 0 0 0 1.239.785c.21-.02.471-.142.994-.389l1.194-.563m7.151-5.035.708-.707c.328-.33.493-.494.664-.592a1.5 1.5 0 0 1 1.5 0c.17.098.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.17-.263.335-.592.664l-.707.707m-2.829-2.828-2.668 2.668c-.19.19-.286.286-.362.395q-.101.145-.166.31c-.049.124-.075.256-.128.521l-.33 1.647c-.078.393-.117.59-.06.73a.5.5 0 0 0 .271.27c.14.059.337.02.731-.06l1.646-.328c.265-.053.398-.08.521-.128a1.5 1.5 0 0 0 .31-.166c.11-.076.205-.172.396-.363l2.668-2.668m-2.829-2.828 2.829 2.828"
    />
  </svg>
);
export default SvgMessageSquareEdit02;
