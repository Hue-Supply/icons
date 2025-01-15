import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneOutgoing02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m20.1 3.458-5.107 5.107m0 0-.028.029m.028-.029a.08.08 0 0 0 .064.023l4.444-.251m-4.508.228a.08.08 0 0 1-.023-.063l.252-4.445M7.246 16.754a20.1 20.1 0 0 0 5.93 4.082c.09.04.133.06.637.19 1.326.34 3.824-.115 4.944-.902.425-.3.608-.482.974-.848.376-.376.564-.564.684-.755a2 2 0 0 0 0-2.128c-.12-.19-.308-.378-.683-.754l-.268-.268c-.369-.368-.553-.553-.762-.66a1.5 1.5 0 0 0-1.001-.132c-.23.05-.456.18-.907.44l-1.101.635c-.232.134-.348.2-.517.241-.121.03-.33.04-.455.021-.17-.025-.263-.067-.447-.152-.747-.344-1.986-1.056-3.358-2.428-1.402-1.402-2.115-2.666-2.45-3.407-.078-.171-.116-.257-.142-.418a1.5 1.5 0 0 1 .011-.43c.033-.159.09-.27.205-.492l.628-1.222c.266-.517.4-.776.432-1.04a1.5 1.5 0 0 0-.128-.819c-.112-.24-.318-.446-.729-.857l-.381-.382c-.376-.375-.564-.563-.754-.683a2 2 0 0 0-2.128 0c-.191.12-.38.308-.755.683-.366.366-.549.55-.848.975-.787 1.12-1.242 3.618-.901 4.944.13.503.15.548.189.636a20.1 20.1 0 0 0 4.081 5.93Z"
    />
  </svg>
);
export default SvgPhoneOutgoing02;
