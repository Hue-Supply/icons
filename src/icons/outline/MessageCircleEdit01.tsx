import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleEdit01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m11.879 9.121.707-.707c.329-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.171.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.336-.592.665l-.707.707M11.88 9.12 9.21 11.79c-.191.19-.287.286-.363.395q-.101.145-.166.31c-.048.124-.075.256-.128.52l-.33 1.647c-.078.394-.117.59-.059.73a.5.5 0 0 0 .27.272c.141.058.338.018.731-.06l1.647-.33c.264-.053.397-.08.52-.128q.166-.064.31-.166c.11-.076.205-.171.396-.362l2.668-2.668M11.88 9.12l2.828 2.829M21 12a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 21 12Z"
    />
  </svg>
);
export default SvgMessageCircleEdit01;
