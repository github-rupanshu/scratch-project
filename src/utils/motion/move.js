

const move =(cat,catMotionState,setCatMotionState,x)=>{
    console.log("moving");
    // let translateBY=catMotionState.transform+x;
    // setCatMotionState(prevState=>{
    //     return {...prevState,prevState.transform:translateBY}
    // })
    setCatMotionState(prevState => ({
        transform: prevState.transform+x,     
        ...prevState
      }));
    //cat.setAttribute(`transform','translateX(${translateBY})`);

}

export {
    move
};