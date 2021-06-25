const move =(catMotionState,setCatMotionState,x)=>{

    console.log("moving");
    const newX=catMotionState.transform.translateX+x;
    setCatMotionState(prevState => ({
      ...prevState,
      transform: {
        ...prevState.transform,
        translateX: newX
      }
    }));
}
const rotate =(catMotionState,setCatMotionState,x)=>{

    console.log("rotating");
    const newX=(catMotionState.rotate+x)%360;
    setCatMotionState(prevState => ({
      ...prevState,
      rotate:newX
    }));
}

export {
    move,
    rotate
};