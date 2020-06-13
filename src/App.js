import React from 'react';

import './App.css';
import{Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './pages/main';
import {Link} from 'react-router-dom';
function App() {
  return (
<div>
    <Layout>
        <Header className="header-style" title={<span style={{ color: 'black' }}><strong></strong></span>}>
            <Navigation>
              <Link to="">Accueil</Link>
              <Link to="curriculumvitæ">Curriculum vitæ</Link>
              <Link to="projets"> Mes projets</Link>
              <Link to="contact">Contact</Link>
      
             
            </Navigation>
        </Header>
        <Drawer  title="">
            <Navigation>
             
            <Link to="">Accueil</Link>
              <Link to="curriculumvitæ">Curriculum vitæ</Link>
              <Link to="projets"> Mes projets</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
          
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
