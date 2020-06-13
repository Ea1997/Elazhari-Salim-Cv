import React from 'react';
import {Grid,Cell} from 'react-mdl';
class Competence extends React.Component{
render(){
    return(
<div>
    <Grid>
        <Cell col={4}>
        <h5>{this.props.nomCompetence}</h5>
        </Cell>
        <Cell col={8}>
   
    <h6>{this.props.descriptionCompetence}</h6>
        </Cell>
    </Grid>
</div>
    );
}
}
export default Competence;