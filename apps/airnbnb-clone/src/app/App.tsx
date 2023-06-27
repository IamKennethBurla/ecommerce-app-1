import { ChakraProvider } from '@chakra-ui/react';
import { Routing } from '@common-core';
import { Routes } from 'apps/airnbnb-clone/src/app/Core/Routing';

export function App() {
  return (
    <ChakraProvider>
      <Routing isAuthenticated userPermissions={[]} routes={Routes} />;
    </ChakraProvider>
  );
}

export default App;
