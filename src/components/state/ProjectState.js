const headerElementDefaultBackColor = "#3d3d3d";
module.exports = { 
    leftNav: {
        width: 60,
        height: 60,
        borderRadius: "50px",
        backgroundColor: `${headerElementDefaultBackColor}`,
        display: "inline-block",
        transitionDuration: "1s",
        overflowY: "auto",
        leftMargin: 'auto',
    },
   
    rightNav: {
 
        width: 60,
        height: 60,
        borderRadius: "50px",
        backgroundColor: `${headerElementDefaultBackColor}`,
        display: "inline-block",
        transitionDuration: "1s",
        overflowY: "auto",
        
      
    },
    
    
    headerNav: {
      
        textAlign: 'center',
        width: 200,
        height: 60,
        borderRadius: "50px",
        backgroundColor: `${headerElementDefaultBackColor}`,
        display: "inline-block",
        overflowY: "auto"
    },
    
    currentData: {
        title: '',
        description: '',
        languages: []
    }
}
