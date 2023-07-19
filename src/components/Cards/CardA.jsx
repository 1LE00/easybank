import './card.css';
import Icon from "../Icons/Icon";

function CardA(props) {
    return (
        <div className="card card__article flex flex-column text-left">
            <div className="card__img">
                <Icon src={props.src} id={props.id} className={props.className} alt={props.alt} title={props.title} />
            </div>
            <div className="card__content flex flex-column">
                <h6 className='card__writer'>{props.by}</h6>
                <h3 className='card__title'>{props.title}</h3>
                <p className='card__description'>{props.content}</p>
            </div>
        </div>
    )
}

export default CardA;