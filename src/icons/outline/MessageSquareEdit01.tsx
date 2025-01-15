import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareEdit01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.879 8.518.707-.707c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.336-.592.664l-.707.708M11.88 8.518 9.21 11.186c-.191.191-.287.287-.363.396q-.101.144-.166.31c-.048.123-.075.256-.128.52l-.33 1.647c-.078.393-.117.59-.06.73a.5.5 0 0 0 .272.271c.14.058.337.019.73-.06l1.647-.329c.264-.053.397-.08.52-.128a1.5 1.5 0 0 0 .31-.166c.11-.076.205-.171.396-.362l2.668-2.668M11.88 8.518l2.828 2.829M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 18 17.88 18 16.2 18h-.846c-.487 0-.73 0-.968.038a3 3 0 0 0-.615.168c-.224.087-.434.211-.854.459l-3.634 2.141c-.411.243-.617.364-.778.406a1.2 1.2 0 0 1-1.46-.834C7 20.218 7 19.979 7 19.502c0-.292 0-.438-.021-.548-.088-.467-.344-.761-.794-.913-.107-.037-.3-.064-.686-.118a2.7 2.7 0 0 1-.861-.25 3 3 0 0 1-1.311-1.311C3 15.72 3 14.88 3 13.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3"
    />
  </svg>
);
export default SvgMessageSquareEdit01;
