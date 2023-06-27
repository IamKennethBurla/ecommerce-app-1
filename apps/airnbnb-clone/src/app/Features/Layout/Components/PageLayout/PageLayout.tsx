import { Header } from 'apps/airnbnb-clone/src/app/Features/Layout';

export interface IPageLayout {
  withHeader?: boolean;
  withFooter?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

export function PageLayout({ withFooter, withHeader, children }: IPageLayout) {
  return (
    <>
      {withHeader && <Header />}
      <div className="px-10 py-10">{children}</div>
    </>
  );
}
