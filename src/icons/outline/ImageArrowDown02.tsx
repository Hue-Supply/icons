import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImageArrowDown02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M7.196 20.406a1 1 0 0 0 1.608 1.188zm7.995-9.135-.804-.594zm2.946-.298-.669.744.016.014.016.013zM21.8 14l.98.199a1 1 0 0 0-.343-.97zM12 3a1 1 0 1 0 0-2zm8.284-1a1 1 0 1 0-2 0zm-2 5.704a1 1 0 1 0 2 0zm-1.017-3.376a1 1 0 1 0-1.4 1.428zM19.23 7.65l-.7.714zm.11 0 .7.714zm3.36-1.894A1 1 0 1 0 21.3 4.328zM10.18 9.5a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-.375 13.094 7.191-9.728-1.608-1.19-7.191 9.73zm8.696-9.85 3.663 3.027 1.274-1.542-3.663-3.026zm-1.505.122a1 1 0 0 1 1.473-.15l1.338-1.486a3 3 0 0 0-4.42.447zM12 21a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.82 1.801A9.004 9.004 0 0 1 12 21v2c5.323 0 9.76-3.78 10.78-8.801zM18.284 2v5.673h2V2zm0 5.673v.031h2v-.031zm-2.416-1.917 2.66 2.608 1.4-1.428-2.66-2.608zm4.17 2.608L22.7 5.756l-1.4-1.428-2.661 2.608zm-1.51 0c.213.208.488.309.756.309v-2c.228 0 .463.085.645.263zm.756.309c.268 0 .543-.101.755-.309l-1.4-1.428a.92.92 0 0 1 .645-.263z"
    />
  </svg>
);
export default SvgImageArrowDown02;
