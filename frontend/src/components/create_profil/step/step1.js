import React, {Component} from 'react'
import {Alert, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import HeaderForm from './headerForm/headerForm'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../../store/actions/userActions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Step1 extends Component {
    state = {
        email: '', password: '', confirm_password: '', error: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    componentDidUpdate() {
        if (this.props.user.success === true) {
            localStorage.setItem("id", this.props.user.id);
            console.log(localStorage.id);
            this.props.nextStep();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
        let email = this.state.email;
        let username = this.state.email;
        let password = this.state.password;
        let confirm_password = this.state.confirm_password;
        if (password === confirm_password) {
            this.props.userActions.addUser(email, username, password);
        } else {
            this.setState({
                error: 'Les deux mots de passes sont différetns'
            })
        }

    }

    render() {

        console.log(this.props.user);
        const {error} = this.props.user;

        return (
            <div>
                <HeaderForm title={"Step 1"} error1={error} error2={this.state.error}/>

                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>

                        <TextField
                            required
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            required
                            id="confirm_password"
                            label="Confirm password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.confirm_password}
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
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
