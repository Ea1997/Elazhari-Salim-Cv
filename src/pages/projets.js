import React from 'react';
import {Tabs,Tab,Card,CardTitle, CardText,CardActions,Button} from 'react-mdl';
class projets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        }
    }
    afficherProjet(){
        if(this.state.activeTab === 0){
            return(





                <div style={{display:'flex',padding:'2em', justifyContent:'space-between'}}>
<Card>
    <CardTitle style={{background : 'url(/images/java.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'white'}}>
Race Age 
    </CardTitle>
    <CardText>
<p> Un jeu de voiture 2D développé en : Java Swing et la base de données SQLite</p>
    </CardText>
    <CardActions border>
        <a href="https://github.com/Ea1997/Game2Djavaswing" target="_blank" rel="noopener noreferrer" >
        <Button colored>
GitHub
        </Button>
        </a>
    </CardActions>
</Card>



<Card>
    <CardTitle style={{background : 'url(/images/java.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'white'}}>
Jeu Wumpus 
    </CardTitle>
    <CardText>
<p> L’objectif général de projet est le développement d’un jeu
simple en utilisant le langage de programmation Java, le but de ce jeu
est de simuler la recherche de l’Or dans le monde du Wumpus. Pour ce
projet, nous avons décidé de résoudre le problème du Wumpus tel que
décrit dans le livre de Stuart Russel et Peter Norvig. Dans ce problème,
il y a un joueur qui évolue sur une grille rectangulaire de taille variable.
Il a comme but d’explorer la grille une cellule à la fois pour retrouver
l’or. </p>
    </CardText>
    <CardActions border>
        <a href="https://github.com/Ea1997/ProjetAI" target="_blank" rel="noopener noreferrer" >
        <Button colored>
GitHub
        </Button>
        </a>
    </CardActions>
</Card>

<Card>
    <CardTitle style={{background : 'url(/images/java.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'white'}}>
ChatApp 
    </CardTitle>
    <CardText>
<p>  Une application de chat  en temps réel développé en : Java
Swing /socket</p>
    </CardText>
    <CardActions border>
        <a href="https://github.com/Ea1997/RSA" target="_blank" rel="noopener noreferrer" >
        <Button colored>
GitHub
        </Button>
        </a>
    </CardActions>
</Card>
</div>















                            );








        }else if (this.state.activeTab === 1){
            return(
                <div style={{display:'flex',padding:'2em'}}>
<Card>
    <CardTitle style={{background : 'url(/images/react-logo.png)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'white'}}>
Curriculum Vitæ
    </CardTitle>
    <CardText>
<p> Mon curriculum vitæ qui contient mes projets et mon cv . <br /> développé en React Js en utilisant la librairie React Material Design Lite </p>
    </CardText>
    <CardActions border>
        <a href="https://github.com/Ea1997/portfolio" target="_blank" rel="noopener noreferrer" >
        <Button colored>
GitHub
        </Button>
        </a>
    </CardActions>
</Card>
</div>
            );
            
        }else if (this.state.activeTab === 2){





            return(





<div style={{display:'flex',padding:'2em', justifyContent:'space-between'}}>
<Card>
    <CardTitle style={{background : 'url(/images/php.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'black'}}>
Sms Express 
    </CardTitle>
    <CardText>
<p>  Application web pour la location des objets entre
particuliers développée en HTML, CSS, Bootstrap, et Laravel.</p>
    </CardText>
    <CardActions border>
        <a href="https://github.com/Ea1997/salimsaramajd" target="_blank" rel="noopener noreferrer" >
        <Button colored>
GitHub
        </Button>
        </a>
    </CardActions>
</Card>

<Card>
    <CardTitle style={{background : 'url(/images/php.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'black'}}>
FlashGram 
    </CardTitle>
    <CardText>
<p>  un clone de instagram développé en : HTML/CSS et
LARAVEL .
</p>
    </CardText>
    <CardActions border>
        <a href="https://elazhari-dev.com" target="_blank" rel="noopener noreferrer" >
        <Button colored>
www.elazhari-dev.com
        </Button>
        </a>
    </CardActions>
</Card>
<Card>
    <CardTitle style={{background : 'url(/images/php.jpg)',
backgroundPosition:'center',
backgroundSize:'cover',
height:'150px',
color:'black'}}>
Psu HASSAN 
    </CardTitle>
    <CardText>
<p>   Site web de la Parti socialiste unifié section Hassan rabat
développé en : HTML/CSS et PHP adapté pour CMS WORDPRESS.
</p>
    </CardText>
    <CardActions border>
        <a href="https://psuhassan.ma" target="_blank" rel="noopener noreferrer" >
        <Button colored>
www.psuhassan.ma
        </Button>
        </a>
    </CardActions>
</Card>

</div>








            );








        }
    }
 render(){
     return(
         <div>
<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab : tabId})}>
    <Tab>
    Java

    </Tab>
    <Tab>
    Reactjs
    </Tab>
    <Tab>
PHP
    </Tab>
</Tabs>

 <section>{this.afficherProjet()}</section>
    
 </div>
     );
 }
}
export default projets;