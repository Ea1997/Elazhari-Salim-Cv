import React from 'react';
import {Grid,Cell} from 'react-mdl';
import Formation from './formation';
import Competence from './competence';
class cv extends React.Component{
 render(){
     return(
<div>
<Grid>
    <Cell col={4}>
        <div style={{textAlign:'center'}} className="cv-description">
        <img
src="/images/salim.png"
alt="Elazhari salim"
className="img-style"
/>
<hr />
<h3>El Azhari Salim</h3>
<h5>Développeur Fullstack</h5>
<hr />
<p>Passionné d'informatique et de
nouvelles technologies depuis
toujours le monde du web est
mon domaine de
prédilection.Autodidacte ,curieux
et rigoureux, je m’adapte en toute
circonstance</p>

<hr />
<h6>Adresse : 19 Rue génève appt 2 l'ocean Rabat ,Maroc</h6>
<a href="mailto:salim.elazhari@etu.uae.ac.ma" style={{textDecoration:'none'}}><h6>E-mail : salim.elazhari@etu.uae.ac.ma</h6></a>
<h6>Telephone : +212 6 74 31 34 49</h6>
<div className="reseaux-sociaux">
<a href="https://www.linkedin.com/in/elazhari-salim/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
<a href="https://github.com/Ea1997" target="_blank" rel="noopener noreferrer"><i class="fab fa-github  fa-2x"></i></a>
<a href="https://www.instagram.com/salim_ea/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram  fa-2x"></i></a>
</div>
<a href="/"><h6>site web personnel</h6></a>
<hr />
        </div>
         </Cell>
    <Cell col={8}>
        <div className="cv-formation">
            <h2>Formation</h2>
           
            <Formation 
             dateDebut = "2012"
             dateFin="2015"
             nomFormation="Lycée Moulay Youssef Rabat"
             descriptionFromation="Baccalaureat science physique Mention Bien"
            />
 <Formation 
             dateDebut = "2015"
             dateFin="2017"
             nomFormation="Centre Alkhawarizmi Rabat"
             descriptionFromation="Admis au concours national cummun"
            />
             <Formation 
             dateDebut = "2017"
             dateFin="2021"
             nomFormation="Ecole nationale des sciences appliquées Tétouan"
             descriptionFromation="Diplôme d’ingénieur en développement informatique"
            />
          <hr />
          <h2>Objectifs</h2> 
          <h4>Explorer le monde professionnel </h4>
          <hr />
          <h2>Compétences</h2> 
          <Competence
          nomCompetence="Langages de programmation"
          descriptionCompetence="Java, C, Unix Shell, PHP(Laravel), HTML, CSS, Node JS , ReactJs,TypeScript(Angular)."
          />
           <Competence
          nomCompetence="Systèmes d’exploitation"
          descriptionCompetence=" Windows , Unix (Ubuntu)."
          />
            <Competence
          nomCompetence="Conception "
          descriptionCompetence=" UML, Merise, Modèle MVC."
          />
              <Competence
          nomCompetence="Bases de données "
          descriptionCompetence="  SQL, PL/SQL, SQL3, Oracle."
          />
        </div>
        </Cell>
</Grid>
</div>
     );
 }
}
export default cv;