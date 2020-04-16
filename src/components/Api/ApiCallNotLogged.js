import React from 'react';
import Axios from 'axios';
import '/home/sara/React_Studies/React-Projects/Pokedex/react-login/src/components/style/style2.css';
import {StylesProvider, TextField} from '@material-ui/core';

class ApiCallNotLogged extends React.Component {
    constructor(){
        super();    
        this.state = {
            id: '1',
            img: '',
            type: '',
            name: '',
            stats0: '',
            stats1:'',
            stats2:'',
            stats3:'',
            stats4:'',
            stats5:'',
            ability0: '',
            ability1: ''
        }
    }
    componentDidMount(){
        this.apiCall();
    }
    componentDidUpdate(){
        this.apiCall();
    }
    apiCall(){
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`)
        .then(res => {
            const pokeData= res.data;
            if(pokeData.types[0].type.name!== 'poison' || pokeData.types.length < 2){
                if(pokeData.abilities.length > 1){
                    this.setState({
                        img : pokeData.sprites.front_default,
                        type : pokeData.types[0].type.name,
                        name : pokeData.name,
                        stats0: pokeData.stats[0],
                        stats1: pokeData.stats[1],
                        stats2: pokeData.stats[2],
                        stats3: pokeData.stats[3],
                        stats4: pokeData.stats[4],
                        stats5: pokeData.stats[5],
                        ability0 : pokeData.abilities[0].ability.name,
                        ability1 : pokeData.abilities[1].ability.name
                          });
                }else{
                    this.setState({
                        img : pokeData.sprites.front_default,
                        type : pokeData.types[0].type.name,
                        name : pokeData.name,
                        stats0: pokeData.stats[0],
                        stats1: pokeData.stats[1],
                        stats2: pokeData.stats[2],
                        stats3: pokeData.stats[3],
                        stats4: pokeData.stats[4],
                        stats5: pokeData.stats[5],
                        ability0 : pokeData.abilities[0].ability.name,
                        ability1 : pokeData.abilities[0].ability.name
                          });
                }
            }else{
                if(pokeData.abilities.length > 1){
                    this.setState({
                        img : pokeData.sprites.front_default,
                        type : pokeData.types[1].type.name,
                        name : pokeData.name,
                        stats0: pokeData.stats[0],
                        stats1: pokeData.stats[1],
                        stats2: pokeData.stats[2],
                        stats3: pokeData.stats[3],
                        stats4: pokeData.stats[4],
                        stats5: pokeData.stats[5],
                        ability0 : pokeData.abilities[0].ability.name,
                        ability1 : pokeData.abilities[1].ability.name
                          });
                }else{
                    this.setState({
                        img : pokeData.sprites.front_default,
                        type : pokeData.types[1].type.name,
                        name : pokeData.name,
                        stats0: pokeData.stats[0],
                        stats1: pokeData.stats[1],
                        stats2: pokeData.stats[2],
                        stats3: pokeData.stats[3],
                        stats4: pokeData.stats[4],
                        stats5: pokeData.stats[5],
                        ability0 : pokeData.abilities[0].ability.name,
                        ability1 : pokeData.abilities[0].ability.name
                          });
                }
                
            }
            
        })        
    }        

    render() { 
        return ( <div>
            <StylesProvider injectFirst>
                    <TextField
                    id="filled-number"
                    label="Insert pokemon ID"
                    type="number"
                    InputLabelProps={{shrink: true}}
                    variant="filled"
                    onChange={e => this.setState({id : e.target.value})}
                    />
            </StylesProvider>
            <figure className={`card card--${this.state.type}`}>
                <div className="card__image-container">
                <img src={this.state.img} alt="Eevee" className="card__image"></img>
                </div>

                <figcaption className="card__caption">
                    <h1 className="card__name">{this.state.name}</h1>

                    <h3 className="card__type">
                        {this.state.type}
                    </h3>

                    <table className="card__stats">
                        <tbody>
                        <tr>
                            <th>HP</th>
                            <td>Login for detail</td>
                        </tr>
                        <tr>
                            <th>Attack</th>
                            <td>Login for detail</td>
                        </tr>

                        <tr>
                            <th>Defense</th>
                            <td>Login for detail</td>
                        </tr>

                        <tr>
                            <th>Special Attack</th>
                            <td>Login for detail</td>
                        </tr>
                        <tr>
                            <th>Special Defense</th>
                            <td>Login for detail</td>
                        </tr>
                        <tr>
                            <th>Speed</th>
                            <td>Login for detail</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="card__abilities">
                        <h4 className="card__ability">
                        <span className="card__label">Ability</span>
                        Login for detail
                        </h4>
                        <h4 className="card__ability">
                        <span className="card__label">Hidden Ability</span>
                        Login for detail
                        </h4>
                    </div>
                </figcaption>
            </figure>
        </div> );
    }
}
 
export default ApiCallNotLogged;