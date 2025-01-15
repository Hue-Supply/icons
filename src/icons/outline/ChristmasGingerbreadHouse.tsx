import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasGingerbreadHouse = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m18.047 9.301.008.005m-3.057-1.669.01.005M12 6l.009.005M5.954 9.3l-.009.005m3.057-1.669-.009.005M3 11.707V17.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2v-5.493c0-.453.18-.887.5-1.207s.5-.754.5-1.207V8.97c0-.907-.494-1.741-1.288-2.178l-6.399-3.52c-.844-.464-1.267-.697-1.714-.788a3 3 0 0 0-1.198 0c-.447.091-.87.324-1.714.788l-6.399 3.52A2.49 2.49 0 0 0 2 8.97v.323c0 .453.18.887.5 1.207s.5.754.5 1.207M14.5 22v-5.5a2.5 2.5 0 0 0-5 0V22z"
    />
  </svg>
);
export default SvgChristmasGingerbreadHouse;
