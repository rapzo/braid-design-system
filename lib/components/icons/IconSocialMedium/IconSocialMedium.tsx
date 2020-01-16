import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSocialMediumSvg } from './IconSocialMediumSvg';

export type IconSocialMediumProps = UseIconProps;

export const IconSocialMedium = (props: IconSocialMediumProps) => {
  const iconProps = useIcon(props);

  return <IconSocialMediumSvg {...iconProps} />;
};