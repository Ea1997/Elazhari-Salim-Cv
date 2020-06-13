import React from 'react';
import {Grid,Cell} from 'react-mdl';
class Formation extends React.Component{
render(){
    return(
<div>
    <Grid>
        <Cell col={4}>
        <h6 style={{margin:'0'}}>{this.props.nomFormation}</h6>
{this.props.dateDebut} - {this.props.dateFin}
        </Cell>
        <Cell col={8}>
   
    <h5>{this.props.descriptionFromation}</h5>
        </Cell>
    </Grid>
</div>
    );
}
}
export default Formation;