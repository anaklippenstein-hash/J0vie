
const Expert = (props) => {
    return(
        <>
            <div className="expert-body">
                <div className="img-wrapper2" style={{ backgroundImage: `url(${props.imgBg})` }}>
                    <div className="img-div">
                        <img src={props.img} alt="" className="img-fluid"/>
                        <h2>{props.number}</h2>
                    </div>
                </div>
                    <h3>{props.head}</h3>
            </div>
        </>
    )
}
export default Expert;