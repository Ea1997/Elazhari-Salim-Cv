import React from 'react';
import {Switch,Route} from 'react-router-dom';
import accueil from './accueil';
import cv from './cv';
import projets from './projets';
import contact from './contact';

const Main=()=>(
<Switch>
    <Route exact path="/" component={accueil}></Route>

    <Route exact path="/curriculumvitæ" component={cv}></Route>
    <Route exact path="/projets" component={projets}></Route>
    <Route exact path="/contact" component={contact}></Route>
</Switch>
);
export default Main;