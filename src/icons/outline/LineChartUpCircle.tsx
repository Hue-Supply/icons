import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChartUpCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.051 14.018a1 1 0 1 0 1.415 1.414zm4.243-2.828.707-.708a1 1 0 0 0-1.414 0zm2.121 2.12-.707.708a1 1 0 0 0 1.414 0zm4.243-2.828a1 1 0 0 0-1.414-1.414zm-.495-2.333a1 1 0 1 0 1.414 1.415zm1.436 1.392a1 1 0 1 0-1.414-1.414zm-1.907 2.8a1 1 0 0 0 1.997.113zm2.194-3.378a1 1 0 0 0-1.996-.113zm-1.01.874a1 1 0 1 0-.113-1.997zm-3.603-1.8a1 1 0 0 0 .113 1.997zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zM7.466 15.432 11 11.897l-1.414-1.415-3.536 3.536zm2.12-3.535 2.122 2.12 1.414-1.413-2.12-2.122zm3.536 2.12 3.536-3.535-1.414-1.414-3.536 3.536zm4.455-4.453.022-.023-1.414-1.414-.022.022zm.112 2.89.197-3.491-1.996-.113-.198 3.49zm-.926-4.614-3.49.197.113 1.997 3.49-.197z"
    />
  </svg>
);
export default SvgLineChartUpCircle;
