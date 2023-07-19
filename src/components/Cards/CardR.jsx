import './card.css';
import Icon from "../Icons/Icon";

function CardR(props){
    return (
        <div className="card flex flex-column">
            <Icon src={props.src} id={props.id} className={props.className} alt={props.alt} title={props.title}/>
            <h3 className='card__title'>{props.title}</h3>
            <p className='card__description'>{props.content}</p>
        </div>
    )
}

export default CardR;