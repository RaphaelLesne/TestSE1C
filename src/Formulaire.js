import React, { Component } from 'react';
import './Formulaire.css';
import identity from './identity.svg';
import lock from './lock.svg';

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChanger = this.handleChanger.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({email: event.target.value}); 
    }

    handleChanger(events) {    
        this.setState({password: events.target.value});   
    }

    handleSubmit(event) {
        alert('Bienvenue: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return(
            <form>
                <div class="Formulaire_email">
                    <div class="Formulaire_identity">
                        <label><img src={identity} className="identity" alt="identity" /></label>
                    </div>
                    <input type="text" value={this.state.email} placeholder="votre@mail.fr" onChange={this.handleChange}/>
                </div>
                <br/>
                <div class="Formulaire_password">
                    <div class="Formulaire_lock">
                        <label><img src={lock} className="lock" alt="lock" /></label>
                    </div>
                    <input type="text" value={this.state.password} placeholder="********" onChange={this.handleChanger}/>
                </div>
                <br/>
                <div class="Formulaire_button">
                    <button type="submit" onClick={this.handleSubmit}>SE CONNECTER</button>
                </div>
            </form>
        );
    }
}

export default Formulaire;