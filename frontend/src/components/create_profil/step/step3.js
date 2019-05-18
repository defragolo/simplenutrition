import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import HeaderForm from './headerForm/headerForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as profilActions from '../../../store/actions/profilActions'

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};


class Step2 extends Component {
    state = {
        gout: '', user: '', age: '', selectedValue: 'a', error: ''
    }
    handleChange = event => {
        this.setState({selectedValue: event.target.value});
    };

    componentDidUpdate() {

        if (this.props.profil.success) {
            this.props.nextStep();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let age = this.state.age;
        let poid = this.state.poid;
        let taille = this.state.taille;
        let user_id = localStorage.id;

        if (taille > 250) {
            this.setState({
                error: 'Taille top élevée'
            })
        } else {
            this.props.profilActions.updateProfil(user_id, age, poid, taille);

        }

    }


    render() {
        const {error} = this.props.profil;
        return (
            <div>
                <HeaderForm title={"Step 3"} error1={error} error2={this.state.error}/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Radio
                            id="selected"
                            checked={this.state.selectedValue === 'a'}
                            onChange={this.handleChange}
                            value="a"
                            name="radio-button-demo"
                            aria-label="A"
                        />
                        <Radio
                            id="encule"
                            checked={this.state.selectedValue === 'b'}
                            onChange={this.handleChange}
                            value="b"
                            name="radio-button-demo"
                            aria-label="B"
                        />

                        <Radio
                            id="encule"
                            checked={this.state.selectedValue === 'c'}
                            onChange={this.handleChange}
                            value="c"
                            name="radio-button-demo"
                            aria-label="B"
                        />

                        <Radio
                            id="encule"
                            checked={this.state.selectedValue === 'd'}
                            onChange={this.handleChange}
                            value="d"
                            name="radio-button-demo"
                            aria-label="B"
                        />

                        <Radio
                            id="encule"
                            checked={this.state.selectedValue === 'e'}
                            onChange={this.handleChange}
                            value="e"
                            name="radio-button-demo"
                            aria-label="B"
                        />
                    </FormGroup>
                    <input type="submit" value="next"/>

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

