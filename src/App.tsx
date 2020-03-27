
import * as React from 'react';
import { Page } from './components/layouts/Page';
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "@fortawesome/fontawesome-free/webfonts/"

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return <Page />;
  }
}

export default App;
