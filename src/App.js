import { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    fullName : '',
    bio : '',
    imgSrc : '',
    alt : '',
    profession : ''
  };
  
  show = false;

  displayProfil = () =>{
    if(this.show === false){
      document.querySelector('button').innerHTML = 'Cacher le profil';
      this.setState({
      fullName : 'Fred Ryan',
      bio : 'I like sport and games',
      imgSrc : './WhatsApp Image 2022-12-07 à 01.09.31.jpg',
      alt : 'myPhoto',
      profession : 'Web developper'
    })
    this.show = true;
    }
    else{
      document.querySelector('button').innerHTML = 'Afficher le profil';
      this.setState({
      fullName : '',
      bio : '',
      imgSrc : '',
      alt : '',
      profession : ''
    })
    this.show = false;
    } 
  }

  render(){
    return (
      <>
        <div className='person'>
          <div className='person-right'>
            <p>Fullname : {this.state.fullName}</p>
            <p>Bio : {this.state.bio}</p>
            <p>Profession : {this.state.profession}</p>
          </div>
          <img src={this.state.imgSrc} alt={this.state.alt} className='person-left' />
        </div>
        <div className='button-display-container'>
          <button onClick={this.displayProfil}>Afficher profil</button>
        </div>
      </>
    );
  }
}

export default App;
