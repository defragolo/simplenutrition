import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as userActions from '../../store/actions/userActions'
import { Redirect } from 'react-router-dom'


export default (Child) => {
    class RequiredAuth extends Component {
        state = {
            component:'', authenticated:99
        }
        securizeComponent(){
          if(localStorage.token){
              if(this.state.authenticated!==1){
                this.setState({
                    authenticated:1,
                    component:<Child />
                })
              }
          }else{
            if(this.state.authenticated!==0){
                this.setState({
                    authenticated:0,
                    component:<Redirect to='/login/' />
                })
              }
          }
        }
        componentDidMount() {
            this.securizeComponent()
        }
        componentDidUpdate() {
            this.securizeComponent()
        }
        render() {
            
            return (
                <div >
                    {this.state.component}
                </div>
            )
        }
    }

    return RequiredAuth;
}


