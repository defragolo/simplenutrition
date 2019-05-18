import React, { Component } from 'react'
import Step1 from './step/step1';
import Step2 from './step/step2';
import Step3 from './step/step3';

export default class CreatingProfil extends Component {
  state = {
    component: '',
    title: '',
    poid: '', taille: '', age: ''
  }
  componentDidMount() {
    // localStorage.setItem("id",null);
    // localStorage.setItem('creating_profil_step', 1);
    // console.log(localStorage);
    let step = localStorage.getItem('creating_profil_step');
    
    if (step !== 0) {
      let user_id = localStorage.getItem('id');
      if(step==1 && !user_id){
        step =2;
        localStorage.setItem('creating_profil_step', 2);
      }
      if (step == 1) {
        this.setState({
          component: <Step1 title={"Première étape"} nextStep={this.nextStep} />
        })
      } else if (step == 2) {
        this.setState({
          component: <Step2 title={"Deuxième étape"} nextStep={this.nextStep} />
        })
      }else if (step==3){
        this.setState({
          component: <Step3 title={"Troisième étape"} nextStep={this.nextStep} />
        })
      }
    }
  }

  nextStep = () => {
    let step = localStorage.getItem('creating_profil_step');
    step = parseInt(step) + 1;
    localStorage.setItem('creating_profil_step', step);
    this.componentDidMount();
    console.log(step);
  }


  render() {

    return (
      <div className="creatingProfil">
        {this.state.component}
      </div>
    )
  }
}
