import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardShield = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.65 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 7.28 22 8.12 22 9.8v2.12M2 10h20m-3.308 5.098-1.122.35c-.424.133-.636.2-.793.327-.14.113-.247.26-.313.426-.075.188-.075.41-.075.854v.308c0 .823 0 1.235.089 1.622.09.394.248.77.467 1.11.215.335.509.622 1.097 1.198.39.38.585.571.806.648.224.079.469.079.693 0 .221-.077.416-.267.806-.648.588-.576.882-.863 1.097-1.198.219-.34.377-.716.467-1.11.09-.387.09-.799.09-1.622v-.308c0-.444 0-.666-.076-.854a1.05 1.05 0 0 0-.313-.426c-.157-.127-.369-.194-.793-.326l-1.122-.351c-.187-.058-.28-.088-.375-.1a1 1 0 0 0-.255 0c-.095.013-.188.042-.375.1"
    />
  </svg>
);
export default SvgCreditCardShield;
