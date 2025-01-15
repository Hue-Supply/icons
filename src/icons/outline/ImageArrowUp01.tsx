import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImageArrowUp01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M21 14h1a1 1 0 0 0-.47-.848zM12 4a1 1 0 1 0 0-2zM7.274 20.312a1 1 0 1 0 1.452 1.376zM15.2 13.4l.726.688zm4.02-.513.53-.848zm-2.674-.665-.39-.921zm1.075-.137-.147.989zm.663-4.381a1 1 0 1 0 2 0zm2-5.704a1 1 0 1 0-2 0zm-4.416 1.948a1 1 0 0 0 1.4 1.428zm3.36-1.894-.7-.714zm.11 0 .7-.714zM21.3 5.376a1 1 0 1 0 1.4-1.428zM18 20H6v2h12zM4 18V6H2v12zm2 2a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4zm14-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM6 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm14 12v4h2v-4zM6 4h6V2H6zm2.726 17.688 7.2-7.6-1.452-1.376-7.2 7.6zm9.963-7.953 1.781 1.113 1.06-1.696-1.78-1.113zm-2.763.353c.33-.35.542-.572.717-.73.165-.15.246-.195.294-.216l-.781-1.841a3 3 0 0 0-.86.577c-.242.22-.511.506-.822.834zm3.823-2.049c-.383-.24-.715-.448-1.005-.6-.3-.159-.616-.29-.977-.344l-.293 1.979c.051.007.14.03.338.134.21.11.47.272.877.527zm-2.812 1.103a1 1 0 0 1 .537-.068l.293-1.979a3 3 0 0 0-1.611.206zM10 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H6a3 3 0 0 0 3 3zM8 9a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm11.284-.296V2.032h-2v5.672zm0-5.672V2h-2v.031zm-3.017 3.344 2.662-2.608-1.4-1.428-2.661 2.608zm1.372-2.608L21.3 5.376l1.4-1.428-2.661-2.608zm1.29 0a.92.92 0 0 1-.645.264v-2c-.268 0-.543.1-.755.308zm-.645.264a.92.92 0 0 1-.645-.264l1.4-1.428a1.08 1.08 0 0 0-.755-.308z"
    />
  </svg>
);
export default SvgImageArrowUp01;
