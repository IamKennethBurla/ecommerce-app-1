import {
  CategoryFilter,
  MainFilter,
  TotalPriceFilter,
} from 'apps/airnbnb-clone/src/app/Features/Filter';
import { PageLayout } from 'apps/airnbnb-clone/src/app/Features/Layout';
import { RoomList } from 'apps/airnbnb-clone/src/app/Features/Room';

export function HomePage() {
  return (
    <PageLayout withHeader>
      <section className="flex w-full items-center">
        <CategoryFilter />
        <div className="ml-5">
          <MainFilter />
        </div>
      </section>
      <section className="mt-5">
        <TotalPriceFilter />
      </section>
      <section className="mt-5">
        <RoomList />
      </section>
    </PageLayout>
  );
}

export default HomePage;
