import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashHand = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m22 5-2.02 10.138c-.275 1.376-.412 2.064-.771 2.578a3 3 0 0 1-1.259 1.033c-.575.251-1.276.251-2.678.251H8.394c-1.445 0-2.168 0-2.754-.263a3 3 0 0 1-1.27-1.077c-.356-.535-.474-1.248-.711-2.673L2 5m5.63 2.916c-1.294.535-3.095.535-4.388 0l-.549-.227m18.614.599-.56-.265c-1.065-.503-2.568-.6-3.805-.28m-2.555 2.184.028.03a1.625 1.625 0 0 0 2.463-2.116L15.67 6.288c-.373-.478-.559-.718-.777-.908a3 3 0 0 0-1.398-.683c-.284-.055-.587-.055-1.193-.055h-.728c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874c-.218.427-.218.987-.218 2.108v2.794a3 3 0 0 0 2.437 2.942l.015.003a3 3 0 0 0 3.562-2.94v-.715"
    />
  </svg>
);
export default SvgWashHand;
