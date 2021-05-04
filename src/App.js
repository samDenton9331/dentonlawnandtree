import './App.css';
import Heading from './components/heading';
import Logo from './components/logo.js';
import { Layout } from 'antd';
import { HashRouter } from 'react-router-dom';
import Menu from './components/menu';
import Content from './components/content';

/* IDs */
import * as Constants from './components/constants'
import ContactMe from './components/contactMe';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Logo/>
          <Menu/>
          <Heading id={Constants.whatIDoID} content="What I Do"/>
          <Content bolded content="What I Do"/>
          <Heading id="two" content="two"/>
          <Content content="Two Content"/>
          <ContactMe/>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
