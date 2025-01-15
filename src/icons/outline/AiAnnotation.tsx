import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiAnnotation = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 18 6.12 18 7.8 18c.128 0 .25.05.341.141l1.596 1.596c.792.792 1.188 1.188 1.645 1.337a2 2 0 0 0 1.236 0c.457-.149.853-.545 1.645-1.337l.889-.888c.258-.259.387-.388.532-.49a2 2 0 0 1 .794-.328c.174-.031.357-.031.722-.031 1.68 0 1.658 0 2.3-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V7.8c0-1.68 0-2.52-.327-3.162A3 3 0 0 0 19.5 3.327C18.858 3 18.88 3 17.2 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.454 7.622c.052-.178.079-.267.098-.307a.5.5 0 0 1 .896 0c.02.04.045.129.098.307.082.28.122.42.17.548a4 4 0 0 0 2.37 2.37c.128.048.268.089.548.17.178.053.267.079.307.098a.5.5 0 0 1 0 .896c-.04.02-.129.046-.307.098-.28.082-.42.123-.548.17a4 4 0 0 0-2.37 2.37c-.048.129-.088.268-.17.548-.053.178-.079.268-.098.307a.5.5 0 0 1-.896 0 3 3 0 0 1-.098-.307 9 9 0 0 0-.17-.548 4 4 0 0 0-2.37-2.37 9 9 0 0 0-.548-.17 3 3 0 0 1-.307-.098.5.5 0 0 1 0-.896c.04-.02.129-.045.307-.098.28-.081.42-.122.548-.17a4 4 0 0 0 2.37-2.37c.048-.128.088-.268.17-.548"
    />
  </svg>
);
export default SvgAiAnnotation;
