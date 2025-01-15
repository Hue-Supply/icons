import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImageArrowDown = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M21 14h1a1 1 0 0 0-.47-.848zM12 4a1 1 0 1 0 0-2zM7.274 20.312a1 1 0 1 0 1.452 1.376zm8.601-7.625L15.15 12zm2.512-.32.53-.848zM20.284 2a1 1 0 1 0-2 0zm-2 5.704a1 1 0 1 0 2 0zm-1.017-3.376a1 1 0 1 0-1.4 1.428zM19.23 7.65l-.7.714zm.11 0 .7.714zm3.36-1.894A1 1 0 1 0 21.3 4.328zM18 20H6v2h12zM4 18V6H2v12zm2 2a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4zm14-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM6 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm14 12v4h2v-4zM6 4h6V2H6zm2.726 17.688 7.875-8.313L15.15 12l-7.875 8.312zm9.131-8.473 2.613 1.633 1.06-1.696-2.613-1.633zm-1.256.16a1 1 0 0 1 1.256-.16l1.06-1.696a3 3 0 0 0-3.768.48zM10 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H6a3 3 0 0 0 3 3zM8 9a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm9.284-6v5.673h2V2zm0 5.673v.031h2v-.031zm-2.416-1.917 2.66 2.608 1.4-1.428-2.66-2.608zm4.17 2.608L22.7 5.756l-1.4-1.428-2.661 2.608zm-1.51 0c.213.208.488.309.756.309v-2c.228 0 .463.085.645.263zm.756.309c.268 0 .543-.101.755-.309l-1.4-1.428a.92.92 0 0 1 .645-.263z"
    />
  </svg>
);
export default SvgImageArrowDown;
