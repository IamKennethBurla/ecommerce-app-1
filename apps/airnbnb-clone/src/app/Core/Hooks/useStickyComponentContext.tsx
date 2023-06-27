import { StickyComponentContext } from 'apps/airnbnb-clone/src/app/Core/Context/StickyComponentContext';
import { useContext } from 'react';

const useStickyComponentContext = () => {
  return useContext(StickyComponentContext);
};

export default useStickyComponentContext;
