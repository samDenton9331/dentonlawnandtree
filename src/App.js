import './App.css';
import Heading from './components/heading';
import Logo from './components/logo.js';
import { Layout } from 'antd';
import { HashRouter } from 'react-router-dom';
import Menu from './components/menu';
import Content from './components/content';

/* IDs */
import * as Constants from './components/constants'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Logo/>
          <Menu/>
          {/* <div style={{height:'1000px'}}></div> */}
          <Heading id={Constants.whatIDoID} content="What I Do"/>
          <Content/>
          <Heading id="two" content="two"/>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
