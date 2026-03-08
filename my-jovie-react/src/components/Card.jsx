
const Card = (props) => {
    return(
        <>
            <div className="card-body">
                <div className="img-wrapper" style={{ backgroundImage: `url(${props.imgBg})` }}>
                    <img src={props.img} alt="" className="img-fluid"/>
                </div>
                <div className="card-item">
                    <h3>{props.head}</h3>
                    <p>{props.headD}</p>
                </div>
            </div>
        </>
    )
}
export default Card;
