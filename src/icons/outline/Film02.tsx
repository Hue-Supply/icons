import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilm02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <g clipPath="url(#film-02_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2.06 17.119 10-.12m0 0 9.998-.118M12.06 17 11.94 7m-9.999.12 10-.12m0 0 9.999-.119M7.107 21.06l-.036-3m-.142-12L6.893 3.06m10.213 17.88-.035-3m-.143-12-.036-2.999M12.107 21l-.036-3M11.928 6l-.035-3m10.19 15.88-.167-13.998a3 3 0 0 0-3.036-2.965l-13.999.167a3 3 0 0 0-2.964 3.035l.167 14a3 3 0 0 0 3.035 2.964l14-.167a3 3 0 0 0 2.963-3.035"
      />
    </g>
    <defs>
      <clipPath id="film-02_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilm02;
