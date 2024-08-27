import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { memo, useContext } from 'react';
import cls from './Text.module.scss';
import { ScrollContext } from '@/app/providers/ScrollProvider/lib/ScrollContext';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    id: number;
    className?: string;
    title?: string;
    text?: string;
    features?: string[];
    anchor?: string;
    // theme?: TextTheme;
    // align?: TextAlign;
    // size?: TextSize;

    // 'data-testid'?: string;
}

// type HeaderTagType = 'h1' | 'h2' | 'h3';

// const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
//     [TextSize.S]: 'h3',
//     [TextSize.M]: 'h2',
//     [TextSize.L]: 'h1',
// };

export const Text = (props: TextProps) => {
    const context = useContext(ScrollContext)
    const refs: { [key: string]: React.RefObject<HTMLDivElement> | undefined } = {
        1: context?.firstRef,
        2: context?.secondRef,
        3: context?.thirdRef,
        4: context?.fourthRef,
      };
      const {
          className,
          text,
          title,
          features,
          id, 
          anchor,
          // theme = TextTheme.PRIMARY,
          // align = TextAlign.LEFT,
          // size = TextSize.M,
          // 'data-testid': dataTestId = 'Text',
      } = props;
      const currentRef = refs[id] || null;
      console.log(refs);
  

    // const HeaderTag = mapSizeToHeaderTag[size];

    // const mods: Mods = {
    //     [cls[theme]]: true,
    //     [cls[align]]: true,
    //     [cls[size]]: true,
    // };

    return (
        <>
            <div className="container" ref={currentRef}>
                <div className="cs_portfolio_details">
                    <div className="anim_div_ShowDowns">
                        <div className="cs_img_show_text cs_text_style_1">
                            <h4 className="cs_heading_text anim_heading_title">{title}</h4>
                            <p className="cs_text_style_body">{text}</p>
                        </div>
                    </div>

                    {features?.length && (
                        <div className="cs_ul_ml anim_div_ShowDowns">
                            <ul>
                                {features.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>)}
                </div>
            </div><div className="cs_height_75 cs_height_lg_45"></div></>
    );
};
