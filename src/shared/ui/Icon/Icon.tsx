import { FC } from 'react';
import React, { memo } from 'react';
import * as cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    return (
        <Svg
        className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
            className,
        ])}
            {...otherProps}
        />
    );
});
