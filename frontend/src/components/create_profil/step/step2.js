import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import HeaderForm from './headerForm/headerForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as profilActions from '../../../store/actions/profilActions'
import TextField from "@material-ui/core/TextField";

class Step2 extends Component {
    state = {
        poids: '', taille: '', age: '', error: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    componentDidUpdate() {

        if (this.props.profil.success) {
            this.props.nextStep();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let age = this.state.age;
        let poids = this.state.poids;
        let taille = this.state.taille;
        let user_id = localStorage.id;

        if (taille > 250) {
            this.setState({
                error: 'Taille top élevée'
            })
        } else {
            this.props.profilActions.updateProfil(user_id, age, poids, taille);

        }

    }


    render() {
        const {error} = this.props.profil;
        return (
            <div>
                <HeaderForm title={"Step 2"} error1={error} error2={this.state.error}/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <TextField
                            required
                            id="taille"
                            label="Taille"
                            type="number"
                            name="taille"
                            autoComplete="taille"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.taille}
                        />
                    </FormGroup>
                    <FormGroup>

                        <TextField
                            required
                            id="poids"
                            label="Poid"
                            type="number"
                            name="poids"
                            autoComplete="poids"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.poids}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            required
                            id="age"
                            label="Age"
                            type="number"
                            name="age"
                            autoComplete="age"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.age}
                        />
                    </FormGroup>

                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>

                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profil: state.profil
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        profilActions: bindActionCreators(profilActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);

