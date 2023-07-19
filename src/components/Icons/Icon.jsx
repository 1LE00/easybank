function Icon(props){
    return (
        <img src={props.src} id={props.id} className={props.className && `${props.className}`} alt={props.alt} title={props.title} />
    )
}

export default Icon;