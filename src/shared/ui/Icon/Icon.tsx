import { FC } from 'react';
import React, { memo } from 'react';
import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    console.log(cls);
    return (
        <Svg
            // className={cls.Icon}
            {...otherProps}
        />
    );
});
