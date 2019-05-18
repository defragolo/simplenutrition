import React from 'react'

const Presentation = (props) => {
    console.log(props);
    return (
        <div className="home">
            Bonjour, cette application permet de générez automatiquement des liste de repas
            en fonction de votre profil et objectifs.
            <div className="button1" onClick={props.start}>Start</div>
        </div>
    )
}

export default Presentation
