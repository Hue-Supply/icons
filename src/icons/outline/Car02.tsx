import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCar02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 14h1.5m9.007 0h1.5m2.493-3.5-.884-3.79c-.31-1.325-.464-1.988-.825-2.482a3 3 0 0 0-1.247-.988C16.982 3 16.302 3 14.942 3H9.06c-1.36 0-2.04 0-2.603.24a3 3 0 0 0-1.246.988c-.362.494-.516 1.157-.825 2.481L3.5 10.5zM19.346 21h.269c.826 0 1.239 0 1.556-.158a1.5 1.5 0 0 0 .67-.671c.159-.317.159-.73.159-1.556V15.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 10.5 18.88 10.5 17.2 10.5H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 12.78 2 13.62 2 15.3v3.315c0 .826 0 1.239.158 1.556.145.29.38.526.671.67.317.159.73.159 1.556.159h.269c.317 0 .476 0 .62-.028a1.5 1.5 0 0 0 .97-.657c.079-.123.138-.27.256-.565s.177-.442.256-.565a1.5 1.5 0 0 1 .97-.657c.144-.028.303-.028.62-.028h7.308c.317 0 .476 0 .62.028.398.078.749.316.97.657.079.123.138.27.256.565s.177.442.256.565a1.5 1.5 0 0 0 .97.657c.144.028.303.028.62.028"
    />
  </svg>
);
export default SvgCar02;
