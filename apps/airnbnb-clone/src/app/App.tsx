import { Routing } from '@common-core';
import { Routes } from 'apps/airnbnb-clone/src/app/Core/Routing';

export function App() {
  return <Routing isAuthenticated userPermissions={[]} routes={Routes} />;
}

export default App;
