import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitCompate = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.032 4.487h1zm-.032-1a1 1 0 1 0 0 2zm1.948 4.416a1 1 0 1 0 1.428-1.4zm-1.894-3.36-.714.7zm0-.11-.714-.7zm3.322-1.962a1 1 0 1 0-1.428-1.4zM10.968 18.5h-1zm.032 1a1 1 0 1 0 0-2zm-1.948-4.416a1 1 0 0 0-1.428 1.4zm1.894 3.361.714-.7zm0 .11.714.7zm-3.322 1.961a1 1 0 0 0 1.428 1.4zM5 16.1H4zm2.4 2.4v1zm-2.237-.819.891-.454zm.656.656-.454.89zM7 5a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM5 7a2 2 0 0 1-2-2H1a4 4 0 0 0 4 4zM3 5a2 2 0 0 1 2-2V1a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm16 14.987a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-5.969-12.5H13v2h.031zm3.345 3.017-2.608-2.662-1.428 1.4 2.608 2.661zm-2.608-1.372 2.608-2.661-1.428-1.4-2.608 2.661zm0-1.29a.92.92 0 0 1 .263.645h-2c0 .268.101.543.309.755zm.263.645a.92.92 0 0 1-.263.645l-1.428-1.4a1.08 1.08 0 0 0-.309.755zM10.97 19.5H11v-2h-.031zm-3.345-3.016 2.608 2.661 1.428-1.4-2.608-2.661zm2.608 1.371-2.608 2.661 1.428 1.4 2.608-2.661zm0 1.29a.92.92 0 0 1-.263-.645h2c0-.268-.101-.543-.309-.755zm-.263-.645c0-.228.085-.464.263-.645l1.428 1.4c.208-.212.309-.487.309-.755zM20 14.987v-9h-2v9zm-2.5-11.5H14v2h3.5zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5zM4 8v8.1h2V8zm3.4 11.5H10v-2H7.4zM4 16.1c0 .404 0 .766.024 1.067.025.312.083.643.248.968l1.782-.908q0 0-.003-.008l-.009-.032a1 1 0 0 1-.025-.183c-.016-.2-.017-.467-.017-.904zm3.4 1.4c-.437 0-.704 0-.904-.017a1.3 1.3 0 0 1-.215-.034l-.008-.004-.908 1.782c.325.166.656.224.968.25.3.024.663.023 1.067.023zm-3.128.635a2.5 2.5 0 0 0 1.093 1.092l.908-1.782a.5.5 0 0 1-.218-.218z"
    />
  </svg>
);
export default SvgGitCompate;
