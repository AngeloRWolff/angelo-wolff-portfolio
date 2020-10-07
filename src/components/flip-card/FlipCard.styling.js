



export const cardContainer = {
    
    width: 160,
    height: 200,
    borderRadius: "20px",
    marginLeft: "10px",
    marginTop: "5px",
    transitionDuration: "0.6s",
    transform: 'rotateY(180deg)',
    zIndex: 100,
    cursor: "pointer",
}


export const frontCard = {
    
    transform: 'rotateY(180deg)',
    position: 'absolute',
    display: 'inline-block',
    zIndex: 0,
    width: 160,
    height: 180,
    backgroundColor: "#303030",
    borderRadius: "25px",
    transitionDuration: "0.6s",
    opacity: 1,
}

export const backCard = {
    color: 'white',
    opacity: 0,
    zIndex: -1,
    position: 'relative',
    display: 'inline-block',
    width: 160,
    height: 200,
    backgroundColor: "#355052",
    borderRadius: "25px",
    transitionDuration: "0.6s",

}
export const frontTitleStyle = {
    display: 'inline-block',
    width: "100%",
    height: "25%",
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "#3b3b3b",
    fontSize: "20px",

    color: "#f2f2f2",
    textAlign: 'center',
    verticalAlign: "middle",
    lineHeight: "250%",
}
export const backColor =
{
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "#303030",
    width: "100%",
    height: "100px",
    position: 'absolute',
    zIndex: -1,

}
export const frontImageStyle = {
    margin: "auto",

    width: "80px",
    height: "80px"
}