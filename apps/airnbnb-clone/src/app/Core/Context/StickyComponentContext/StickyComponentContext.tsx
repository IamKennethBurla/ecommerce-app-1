import { createContext, useCallback, useState } from 'react';

interface IStickyComponent {
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
  component: React.ReactNode;
}

interface IStickyComponentContextProvider {
  children: React.ReactNode;
}

const StickyComponentContext = createContext<
  ({ top, bottom, left, right, component }: IStickyComponent) => void
>(() => ({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));

const StickyComponentContextProvider = ({
  children,
}: IStickyComponentContextProvider) => {
  const [top, setTop] = useState<string | number>(0);
  const [bottom, setBottom] = useState<string | number>(0);
  const [left, setLeft] = useState<string | number>(0);
  const [right, setRight] = useState<string | number>(0);
  const [component, setComponent] = useState<React.ReactNode>(<></>);

  const addStickyWrapper = useCallback(
    ({ top, bottom, left, right, component }: IStickyComponent) => {
      setTop(top);
      setBottom(bottom);
      setLeft(left);
      setRight(right);
      setComponent(component);
    },
    []
  );

  return (
    <StickyComponentContext.Provider value={addStickyWrapper}>
      {children}
      <div
        style={{
          position: 'sticky',
          top,
          bottom,
          left,
          right,
        }}
      >
        {component}
      </div>
    </StickyComponentContext.Provider>
  );
};

export { StickyComponentContext, StickyComponentContextProvider };
