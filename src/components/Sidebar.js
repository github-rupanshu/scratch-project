import React, { useState } from "react";
import Icon from "./Icon";

import { moveX,moveY,rotate } from "../utils/motion";

export default function Sidebar({catMotionState,setCatMotionState}) {
  

  function handleMoveX(e) {
    e.preventDefault();
    moveX (catMotionState,setCatMotionState,50);
  }
  function handleMoveY(e) {
    e.preventDefault();
    moveY (catMotionState,setCatMotionState,50);
  }
  function handleRotate(e){
    e.preventDefault();
    rotate(catMotionState,setCatMotionState,15);
  }
  function handleRotateACW(e){
    e.preventDefault();
    rotate(catMotionState,setCatMotionState,-15);
  }
  function sayHello(){
    const textBox=document.getElementById("cat-text");
    const catLocation=document.getElementById("cat");
    console.log(catLocation.offsetTop);
    textBox.style.transform = `translate(${catLocation.offsetLeft}px)`;

    textBox.innerText="Hello !!"
  }
  function handleClick(e) {
    // e.preventDefault();

    console.log(cat);
    cat.setAttribute("transform", "translate(100,100)");
  }
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        onClick={handleClick}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handleMoveX}
      >
        {"Move 10 steps Right"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handleMoveY}
      >
        {"Move 10 steps Down "}
      </div>
      <div 
      onClick={handleRotate} 
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div 
      onClick={handleRotateACW} 
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={sayHello}
      >
        {"Say Hello"}
      </div>

    </div>
  );
}
