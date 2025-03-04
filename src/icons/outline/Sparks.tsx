import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSparks = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#sparks_svg__a)"
    >
      <path d="M13.7 11.154c.285-.976.428-1.465.567-1.665a1.5 1.5 0 0 1 2.465 0c.139.2.282.688.567 1.665.112.383.168.574.243.747a3 3 0 0 0 1.557 1.556c.172.075.364.131.747.243.976.286 1.464.429 1.664.567a1.5 1.5 0 0 1 0 2.466c-.2.138-.688.281-1.664.567-.383.112-.575.168-.747.243a3 3 0 0 0-1.557 1.556c-.075.173-.13.364-.243.747-.285.977-.428 1.465-.567 1.665a1.5 1.5 0 0 1-2.465 0c-.139-.2-.282-.688-.567-1.665-.112-.383-.168-.574-.243-.747a3 3 0 0 0-1.557-1.556c-.172-.075-.364-.131-.747-.243-.976-.286-1.464-.429-1.664-.567a1.5 1.5 0 0 1 0-2.466c.2-.138.688-.281 1.664-.567.383-.112.575-.168.747-.243a3 3 0 0 0 1.557-1.556c.075-.173.13-.364.243-.747M5.636 2.577a3 3 0 0 1 .098-.307.5.5 0 0 1 .895 0c.02.04.046.129.098.307.082.28.123.42.17.548a4 4 0 0 0 2.37 2.37c.13.047.269.088.549.17.178.052.267.078.307.098a.5.5 0 0 1 0 .896c-.04.02-.13.045-.307.098-.28.081-.42.122-.549.17a4 4 0 0 0-2.37 2.37 9 9 0 0 0-.17.548c-.052.178-.078.267-.098.307a.5.5 0 0 1-.895 0c-.02-.04-.046-.129-.098-.307a9 9 0 0 0-.17-.548 4 4 0 0 0-2.37-2.37c-.129-.048-.269-.089-.549-.17a3 3 0 0 1-.306-.098.5.5 0 0 1 0-.896c.04-.02.128-.046.306-.098.28-.082.42-.123.549-.17a4 4 0 0 0 2.37-2.37c.047-.129.088-.269.17-.548" />
    </g>
    <defs>
      <clipPath id="sparks_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSparks;
