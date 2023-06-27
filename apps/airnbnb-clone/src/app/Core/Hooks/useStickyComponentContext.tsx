import { StickyComponentContext } from 'apps/airnbnb-clone/src/app/Core/Context';
import { useContext } from 'react';

export const useStickyComponent = () => {
  return useContext(StickyComponentContext);
};
