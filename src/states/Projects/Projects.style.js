export const navStyle = {
    width: 50,
    marginRight:'3px',
    height: 50,
    marginTop:305,
    display: 'inline-block',
    borderRadius: "50%",
    transitionDuration: '0.5s',
    backgroundColor: '#363636',
    zIndex: 100,
}
export const  navSelected = {
    marginRight:'3px',
    width: 50,
    height: 50,
    marginTop:305,
    display: 'inline-block',
    borderRadius: "10px",
    transitionDuration: '0.5s',
    backgroundColor: '#3c647d',
    zIndex: 100,
}

export const  hidden = {
    height: 250,
    width: 300,
    transitionDuration: "0.2s",
    border: '0',
    position: 'absolute',
    transform: 'translateX(-200px)',
    opacity: 0,
    zIndex:-100,
    borderRadius: '25px',
}

export const  showing = {
    border: '0',
    height: 300,
    width: 350,
    display: 'inline-box',
    transform: 'translateX(-50%)',
    margin: 'auto',
    zIndex:100,
    boxShadow: "0 8px 6px -6px black",
    transitionDuration: "0.4s",
    borderRadius: '25px',
    position: 'absolute',
    opacity: 1,
   
}
export const  zoomed = { 
    border: '0',
    height: 400,
    width: 450,
    display: 'inline-box',
    transform: 'translateX(-50%)',
    margin: 'auto',
    
    boxShadow: "0 8px 6px -6px black",
    transitionDuration: "0.4s",
    borderRadius: '25px',
    position: 'absolute',
    opacity: 1,
}