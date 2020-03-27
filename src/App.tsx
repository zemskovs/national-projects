import * as React from 'react';
import { CulturePage } from './pages/CulturePage';
// import "@fortawesome/fontawesome-free/webfonts/"

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return <CulturePage />;
  }
}

export default App;
