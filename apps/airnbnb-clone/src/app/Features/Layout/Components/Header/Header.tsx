import { HeaderFilter } from 'apps/airnbnb-clone/src/app/Features/Filter';
import { HeaderNav } from 'apps/airnbnb-clone/src/app/Features/Layout';

export function Header() {
  return (
    <header className="flex items-center bg-white h-[80px] border-grey border-[.5px] sticky top-0 z-10">
      <div className="flex w-full justify-between items-center px-10">
        <div className="w-[110px]">
          Logo
          {/* <img alt="airbnbclone" className="w-[100%]" src={BrandLogo} /> */}
        </div>
        <HeaderFilter />
        <HeaderNav />
      </div>
    </header>
  );
}
