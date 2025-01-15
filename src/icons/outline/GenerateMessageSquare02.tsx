import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGenerateMessageSquare02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.246.125.521.203.861.25.386.054.58.081.686.118.45.152.706.446.794.913.021.11.021.256.021.548 0 .477 0 .716.045.876.178.63.828 1 1.46.834.161-.042.367-.163.778-.406l3.634-2.141c.42-.248.63-.372.854-.459a3 3 0 0 1 .615-.168c.237-.038.48-.038.968-.038h.846c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.454 7.202c.052-.178.079-.267.098-.307a.5.5 0 0 1 .896 0c.02.04.045.129.098.307.082.28.122.42.17.549a4 4 0 0 0 2.37 2.37c.128.047.268.088.548.17.178.052.267.078.307.097a.5.5 0 0 1 0 .896c-.04.02-.129.046-.307.098-.28.082-.42.123-.548.17a4 4 0 0 0-2.37 2.37c-.048.129-.088.269-.17.548-.053.179-.079.268-.098.307a.5.5 0 0 1-.896 0 3 3 0 0 1-.098-.307 9 9 0 0 0-.17-.548 4 4 0 0 0-2.37-2.37 9 9 0 0 0-.548-.17 3 3 0 0 1-.307-.098.5.5 0 0 1 0-.896c.04-.02.129-.045.307-.097.28-.082.42-.123.548-.17a4 4 0 0 0 2.37-2.37c.048-.13.088-.27.17-.549"
    />
  </svg>
);
export default SvgGenerateMessageSquare02;
