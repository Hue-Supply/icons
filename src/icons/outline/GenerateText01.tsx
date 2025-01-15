import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGenerateText01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m13.099 7.156 2.334-2.334c.622-.623.933-.934 1.277-1.085a2 2 0 0 1 1.61 0c.344.151.655.462 1.278 1.085.622.622.933.933 1.084 1.277a2 2 0 0 1 0 1.61c-.15.344-.462.655-1.084 1.278l-2.335 2.334m-4.165-4.165L5.664 14.59c-.235.234-.352.352-.455.48q-.165.206-.291.436c-.08.145-.143.298-.27.605-.766 1.86-1.15 2.79-.99 3.381a1.8 1.8 0 0 0 1.268 1.269c.59.16 1.52-.224 3.38-.992.308-.126.462-.19.606-.268q.232-.127.436-.291c.129-.103.246-.22.48-.456l7.435-7.434m-4.165-4.165 4.165 4.165m2.528 8.45v.02M2.467 4.936c.224-.065.336-.098.439-.136a3.2 3.2 0 0 0 1.895-1.895c.038-.103.07-.215.136-.439.042-.142.063-.213.078-.245a.4.4 0 0 1 .717 0c.015.032.036.103.078.245.065.224.098.336.136.439a3.2 3.2 0 0 0 1.895 1.895c.103.038.215.07.439.136.142.042.213.063.245.078a.4.4 0 0 1 0 .717c-.032.015-.103.036-.245.078a7 7 0 0 0-.439.136 3.2 3.2 0 0 0-1.895 1.895 7 7 0 0 0-.136.439c-.042.142-.063.213-.078.245a.4.4 0 0 1-.717 0C5 8.493 4.98 8.422 4.937 8.28a7 7 0 0 0-.136-.439 3.2 3.2 0 0 0-1.895-1.895 7 7 0 0 0-.439-.136c-.142-.042-.213-.063-.245-.078a.4.4 0 0 1 0-.717c.032-.015.103-.036.245-.078M17.896 19.51c.146-.043.22-.064.287-.089a2.09 2.09 0 0 0 1.238-1.238c.025-.068.046-.14.09-.287.026-.093.04-.14.05-.16a.261.261 0 0 1 .468 0c.01.02.024.067.051.16.043.146.065.22.09.287a2.09 2.09 0 0 0 1.238 1.238c.067.025.14.046.287.09.093.026.14.04.16.05a.261.261 0 0 1 0 .468c-.02.01-.067.024-.16.051-.147.043-.22.065-.287.09a2.09 2.09 0 0 0-1.239 1.238c-.024.067-.046.14-.089.287-.027.093-.04.14-.05.16a.261.261 0 0 1-.469 0c-.01-.02-.024-.067-.05-.16a5 5 0 0 0-.09-.287 2.09 2.09 0 0 0-1.238-1.239c-.068-.024-.14-.046-.287-.089a1.4 1.4 0 0 1-.16-.05.261.261 0 0 1 0-.469c.02-.01.067-.024.16-.05"
    />
  </svg>
);
export default SvgGenerateText01;
