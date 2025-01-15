import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImagePlus01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21 14h1a1 1 0 0 0-.47-.848zM12 4a1 1 0 1 0 0-2zM7.274 20.312a1 1 0 1 0 1.452 1.376zM15.2 13.4l.726.688zm4.02-.513.53-.848zm-2.674-.665-.39-.921zm1.075-.137-.147.989zm-2.31-7.741a1 1 0 0 0 0 2zm6.689 2a1 1 0 1 0 0-2zM19.656 2a1 1 0 1 0-2 0zm-2 6.688a1 1 0 1 0 2 0zM18 20H6v2h12zM4 18V6H2v12zm2 2a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4zm14-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM6 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm14 12v4h2v-4zM6 4h6V2H6zm2.726 17.688 7.2-7.6-1.452-1.376-7.2 7.6zm9.963-7.953 1.781 1.113 1.06-1.696-1.78-1.113zm-2.763.353c.33-.35.542-.572.717-.73.165-.15.246-.195.294-.216l-.781-1.841a3 3 0 0 0-.86.577c-.242.22-.511.506-.822.834zm3.823-2.049c-.383-.24-.715-.448-1.005-.6-.3-.159-.616-.29-.977-.344l-.293 1.979c.051.007.14.03.338.134.21.11.47.272.877.527zm-2.812 1.103a1 1 0 0 1 .537-.068l.293-1.979a3 3 0 0 0-1.611.206zM10 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H6a3 3 0 0 0 3 3zM8 9a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm6.312-1.656h3.344v-2h-3.344zm3.344 0H22v-2h-3.344zm-1-4.344v3.344h2V2zm0 3.344v3.344h2V5.344z"
    />
  </svg>
);
export default SvgImagePlus01;
