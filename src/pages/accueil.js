import React from 'react';
import { Grid,Cell } from 'react-mdl';

class accueil extends React.Component{
 render(){
     return(
            
<div className="acceuil">
       
<Grid className="grid-style" style={{height:'100%'}}>
        <Cell col={12}>

<div className="banner-style">
<h1>Elazhari Salim</h1>
<hr />
<h1>Développeur Web Full Stack</h1>
<hr />
<p> Angular | Node JS | Ionic Framework | PHP(Laravel) <br/><br/> HTML/CSS | JAVA | SQL | PLSQL</p>

<div className="reseaux-sociaux">
<a href="https://www.linkedin.com/in/elazhari-salim/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-5x"></i></a>
<a href="https://github.com/Ea1997" target="_blank" rel="noopener noreferrer"><i class="fab fa-github  fa-5x"></i></a>
<a href="https://www.instagram.com/salim_ea/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram  fa-5x"></i></a>
<a href="mailto:salim.elazhari@etu.uae.ac.ma"><i class="far fa-envelope  fa-5x"></i></a>
</div>

</div>

        </Cell>
   
        </Grid>
        
</div>
     );
 }
}
export default accueil;