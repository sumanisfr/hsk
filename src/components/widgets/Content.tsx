import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { CircularGallery } from '../style/CircularGallery';

const Content = ({
  header,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'h-600px' : 'h-600px'}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl text-red-300" />}
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </WidgetWrapper>
);

export default Content;
