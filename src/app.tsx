import React from 'react';
import Handler from "./redux/components/handler";
import { Log } from 'oidc-client';

Log.logger = console;
Log.level = Log.DEBUG;


const App = () => {
  return (
    <main>
      <Handler/>
    </main>
  );
};

export default App;
