import { HeaderFilter } from 'apps/airnbnb-clone/src/app/Features/Filter';
import { HeaderNav } from 'apps/airnbnb-clone/src/app/Features/Layout';
import BrandLogo from 'apps/airnbnb-clone/src/assets/logo1.png';

export function Header() {
  return (
    <header className="flex items-center px-10 h-[80px] border-grey border-[.5px]">
      <div className="flex w-full justify-between items-center">
        <div className="w-[110px]">
          <img alt="airbnbclone" className="w-[100%]" src={BrandLogo} />
        </div>
        <HeaderFilter />
        <HeaderNav />
      </div>
    </header>
  );
}
