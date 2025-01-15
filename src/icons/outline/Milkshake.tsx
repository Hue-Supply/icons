import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMilkshake = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m17.5 13.445-1.151 6.57c-.124.705-.186 1.058-.364 1.323a1.5 1.5 0 0 1-.634.532c-.291.13-.65.13-1.366.13h-3.969c-.716 0-1.075 0-1.366-.13a1.5 1.5 0 0 1-.634-.532c-.178-.265-.24-.618-.364-1.323l-1.151-6.57m11.884-3.419a6.096 6.096 0 0 0-6.097-6.096h-.574a6.096 6.096 0 0 0-6.096 6.096M12 3V2M6.78 13.445H17.22c.15 0 .224 0 .291-.006a1.5 1.5 0 0 0 1.262-.945c.024-.063.045-.135.087-.278.07-.241.106-.362.121-.458a1.5 1.5 0 0 0-1.288-1.72c-.097-.012-.222-.012-.473-.012H6.782c-.252 0-.377 0-.474.013a1.5 1.5 0 0 0-1.288 1.719c.015.096.05.217.121.458.042.143.063.215.088.278a1.5 1.5 0 0 0 1.261.945c.067.006.142.006.292.006"
    />
  </svg>
);
export default SvgMilkshake;
