import './customcard.css'
// import html from '../../../assets/tech/html.png'
// import css from '../../../assets/tech/css.png'
// import javascript from '../../../assets/tech/javascript.png'
// import typescript from '../../../assets/tech/typescript.png'
// import reactjs from '../../../assets/tech/reactjs.png'
// import redux from '../../../assets/tech/redux.png'
// import mongodb from '../../../assets/tech/mongodb.png'
// import figma from '../../../assets/tech/figma.png'
// import nodejs from '../../../assets/tech/nodejs.png'
// import git from '../../../assets/tech/git.png'
// import threejs from '../../../assets/tech/threejs.svg'

const CustomCards = ({title="", techie = []}) => {
    return (
        <div className='tech col-lg-4 col-md-6 col-12'>
            <h3>{title}</h3>
            <hr />
            <div className='d-flex techies'>
                {techie.map((tech, index) => (
                <button key={index} className='techie' type="button" class="btn btn-outline-primary m-1">{tech}</button>
                ))}
            </div>
        </div> 
    )
}

export default CustomCards;