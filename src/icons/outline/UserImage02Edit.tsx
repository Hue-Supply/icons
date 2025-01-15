import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserImage02Edit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 15.44h-1.636c-2.073 0-3.753 1.742-3.753 3.891v.3M10 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8V10m-3.297 5.465.708-.707c.328-.329.493-.493.664-.592a1.5 1.5 0 0 1 1.5 0c.17.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.336-.592.664l-.707.708m-2.829-2.829-2.668 2.668c-.19.191-.286.287-.362.396q-.101.145-.166.31c-.048.123-.075.256-.128.52l-.33 1.647c-.078.393-.117.59-.06.73a.5.5 0 0 0 .272.271c.14.058.337.019.73-.06l1.646-.329c.265-.053.398-.08.521-.128q.165-.065.31-.166c.11-.076.205-.171.396-.362l2.668-2.668m-2.829-2.829 2.829 2.829m-5.5-8.094c0 1.736-1.358 3.144-3.032 3.144S8.969 11.936 8.969 10.2 10.326 7.057 12 7.057s3.031 1.407 3.031 3.143"
    />
  </svg>
);
export default SvgUserImage02Edit;
