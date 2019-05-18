import React, { Component } from 'react'

import CreatingProfil from '../create_profil/CreatingProfil'
import Presentation from '../home/Presentation'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: null,
            component: <Presentation start={this.start_create_profil} />
        }
    }

    componentDidMount() {
        if (this.state.user_id == null) {
            if (localStorage.getItem('creating_profil_step')!==0) {
                this.setState({
                    component: <CreatingProfil />
                })
            }
        }
    }

    start_create_profil = () => {
        localStorage.setItem('creating_profil_step', 1);
        console.log("test");
    }

    render() {


        return (
            <div className="container">
                {this.state.component}

            </div>
        )
    }
}

export default Home
