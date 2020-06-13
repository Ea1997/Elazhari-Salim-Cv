import React from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class contact extends React.Component{
 render(){
     return(
<div className="contact-body">
    <Grid className="contact-grid">
        <Cell col={6}>
<h2>El Azhari Salim</h2>
<img
src="/images/salim.png"
alt="Elazhari salim"
className="img-style"
/>
<p>Passionné d'informatique et de
nouvelles technologies depuis
toujours le monde du web est
mon domaine de
prédilection.Autodidacte ,curieux
et rigoureux, je m’adapte en toute
circonstance
</p>
        </Cell>

<Cell col={6}>
<h2>Contact</h2>
<hr />
<List>
  <ListItem>
    <ListItemContent><i class="fas fa-mobile-alt fa-2x"></i> +212 6 74 31 34 49</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent> <i class="far fa-envelope  fa-2x"></i> salim.elazhari@etu.uae.ac.ma</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent ><i class="fas fa-map-marker-alt fa-2x"></i> 19 Rue Génève Appt 2 l'océan Rabat , Maroc</ListItemContent>
  </ListItem>
</List>
</Cell>
    </Grid>
</div>
     );
 }
}
export default contact;