import {
  CategoryFilter,
  MainFilter,
  TotalPriceFilter,
} from 'apps/airnbnb-clone/src/app/Features/Filter';
import { PageLayout } from 'apps/airnbnb-clone/src/app/Features/Layout';
import { RoomList } from 'apps/airnbnb-clone/src/app/Features/Room';
import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';

export function HomePage() {
  const [showStickyFilter, setShowStickyFilter] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        console.log(window.scrollY);
        setShowStickyFilter(true);
      } else {
        setShowStickyFilter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout withHeader>
      <section
        className={clsx(
          'flex w-full items-end h-[70px] bg-white px-10 mt-6',
          showStickyFilter &&
            'sticky top-[80px] z-10 drop-shadow-md h-[75px]  mt-0'
        )}
      >
        <CategoryFilter />
        <div className="ml-5 mb-[14px]">
          <MainFilter />
        </div>
      </section>
      <div className="px-10 mb-10">
        <section className="mt-8">
          <TotalPriceFilter />
        </section>
        <section className="mt-5">
          <RoomList />
        </section>
      </div>
    </PageLayout>
  );
}

export default HomePage;
