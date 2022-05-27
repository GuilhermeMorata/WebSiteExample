import './about.css';
import about from '../../../../img/about.jpeg'

function About(){
    return(
        <div className='contentabout'>
            <img src={about} alt='quem somos'></img>
            <div className='abouttext'>
              <h1>WHO WE ARE</h1>
                <p>
                    this site is about a test company which serves as a model to demonstrate my frontend development 
                    and design capabilities using react and backend in nestjs. thus having only one test model.
                </p>
            </div>
        </div>
    )
}

export default About;