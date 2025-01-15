import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGenerateFolder01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="m3.638 20.673-.454.891zm-1.311-1.311-.891.454zm19.346 0 .891.454zm-1.311 1.311.454.891zm0-13.346.454-.891zm1.311 1.311.891-.454zM15 7v1a1 1 0 0 0 .848-1.53zm-3.266-3.863-.299.954zm2.176 2.119-.848.53zm-1.12-1.534-.651.76zm-9.698-.504.454.891zm-.874.874.891.454zm6.876 9.468-.28-.96zm.438-.136-.345-.938zm2.032-2.334-.96-.28zm-.136.439-.939-.346zm-2.334 2.904-.28.96zm-.245-.078-.445.895zm0-.717-.445-.895zm2.715 3.265-.96.28zm-.136-.439-.939.346zM9.532 14.57l-.345.938zm2.904 2.334.96.28zm-.078.245.896.445zm-.716 0-.896.445zm3.264-2.715.28.96zm-.439.136.346.938zm-1.895 1.895.939.346zm2.334-2.904.28-.96zm.245.078.445-.895zm0 .717.445.895zm-2.715-3.265.96-.28zm.136.439.939-.346zm1.896 1.895.345-.938zm-2.11-2.579.896-.445zm-.716 0-.896-.445zM2 8h15.2V6H2zm19 3.8v4.4h2v-4.4zM17.2 20H6.8v2h10.4zM3 16.2V7H1v9.2zM6.8 20c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18l-.908 1.782c.485.247 1.002.346 1.564.392C5.298 22 5.976 22 6.8 22zM1 16.2c0 .824 0 1.501.044 2.052.046.562.145 1.079.392 1.564l1.782-.908c-.08-.156-.145-.38-.18-.819C3 17.639 3 17.057 3 16.2zm3.092 3.582a2 2 0 0 1-.874-.874l-1.782.908a4 4 0 0 0 1.748 1.748zM21 16.2c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819l1.782.908c.247-.485.346-1.002.392-1.564.045-.55.044-1.228.044-2.052zM17.2 22c.824 0 1.501 0 2.052-.044.562-.046 1.079-.145 1.564-.392l-.908-1.782c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038zm3.582-3.092a2 2 0 0 1-.874.874l.908 1.782a4 4 0 0 0 1.748-1.748zM17.2 8c.857 0 1.439 0 1.889.038.438.035.663.1.819.18l.908-1.782c-.485-.247-1.002-.346-1.564-.392C18.702 6 18.024 6 17.2 6zm5.8 3.8c0-.824 0-1.501-.044-2.052-.046-.562-.145-1.079-.392-1.564l-1.782.908c.08.156.145.38.18.819.037.45.038 1.032.038 1.889zm-3.092-3.582a2 2 0 0 1 .874.874l1.782-.908a4 4 0 0 0-1.748-1.748zM5.2 4h4.64V2H5.2zm7.862 1.786 1.09 1.744 1.696-1.06-1.09-1.744zM15 6H2v2h13zM3 7v-.8H1V7zm6.84-3c1.035 0 1.338.01 1.595.091l.598-1.908C11.415 1.989 10.746 2 9.84 2zm4.918.726c-.48-.769-.826-1.341-1.318-1.763L12.14 4.48c.205.176.374.427.923 1.305zm-3.323-.635a2 2 0 0 1 .704.39l1.301-1.518a4 4 0 0 0-1.407-.78zM5.2 2c-.544 0-1.011 0-1.395.03-.395.033-.789.104-1.167.297l.908 1.782c.05-.025.15-.063.422-.085C4.25 4 4.623 4 5.2 4zM3 6.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422l-1.782-.908c-.193.378-.264.772-.296 1.167C.999 5.189 1 5.656 1 6.2zm-.362-3.873a3 3 0 0 0-1.311 1.311l1.782.908a1 1 0 0 1 .437-.437zM9.375 14.52c.21-.061.36-.105.503-.158l-.691-1.876a6 6 0 0 1-.374.114zm1.229-3.71c-.07.237-.091.31-.115.373l1.877.692c.053-.143.096-.294.158-.504zm-.726 3.552a4.2 4.2 0 0 0 2.488-2.487l-1.877-.692a2.2 2.2 0 0 1-1.302 1.303zm-.503-.889-.091-.027-.056-.016-.009-.003a1 1 0 0 1 .074.032l-.89 1.791c.097.048.195.078.228.088l.182.055zm-.562-.873-.182.055c-.033.01-.13.04-.227.088l.89 1.791a1 1 0 0 1-.075.032l.01-.003.055-.016.09-.027zm.48.859a.6.6 0 0 1 0 1.075l-.89-1.791c-1.036.514-1.036 1.993 0 2.507zm3.23 3.163c-.061-.21-.104-.36-.157-.504l-1.877.692c.023.063.045.136.115.373zm-3.71-1.23c.238.07.31.092.374.115l.691-1.876c-.143-.053-.293-.097-.503-.158zm3.553.726a4.2 4.2 0 0 0-2.488-2.487l-.691 1.876a2.2 2.2 0 0 1 1.302 1.303zm-.89.504-.043.146-.003.01a1 1 0 0 1 .032-.075l1.792.89c.048-.097.078-.194.088-.227l.054-.183zm-.872.561.054.183c.01.033.04.13.088.227l1.792-.89.032.074-.003-.009-.043-.146zm.858-.48a.6.6 0 0 1 1.076 0l-1.792.89c.515 1.036 1.993 1.036 2.508 0zm3.164-3.23c-.21.061-.361.105-.504.158l.691 1.876a6 6 0 0 1 .374-.114zm-1.23 3.71c.07-.237.091-.31.115-.373l-1.877-.692c-.053.143-.096.294-.158.504zm.726-3.552a4.2 4.2 0 0 0-2.488 2.487l1.877.692a2.2 2.2 0 0 1 1.302-1.303zm.504.889.09.027.056.016.009.003-.023-.009-.051-.023.89-1.791c-.097-.048-.195-.078-.228-.088l-.182-.055zm.56.873.183-.055c.033-.01.13-.04.227-.088l-.89-1.791.052-.023.023-.01q.01-.002-.01.004l-.055.017-.09.026zm-.48-.859a.6.6 0 0 1 0-1.075l.89 1.791c1.037-.514 1.037-1.993 0-2.507zm-3.23-3.163c.062.21.105.361.158.504l1.877-.692a7 7 0 0 1-.115-.373zm3.71 1.23a6 6 0 0 1-.373-.115l-.691 1.876c.143.053.293.097.504.158zm-3.552-.726a4.2 4.2 0 0 0 2.488 2.487l.691-1.876a2.2 2.2 0 0 1-1.302-1.303zm1.762-1.065-.054-.182c-.01-.034-.04-.131-.088-.228l-1.792.89-.023-.052-.009-.022.003.009.043.146zm-.873.561.044-.146.003-.01-.009.023-.023.052-1.792-.89c-.048.097-.078.194-.088.228-.016.05-.034.114-.054.182zm.73-.97c-.514-1.037-1.992-1.037-2.507 0l1.792.889a.6.6 0 0 1-1.076 0z"
    />
  </svg>
);
export default SvgGenerateFolder01;
