import { Resizable } from "re-resizable";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { RiDeleteBinLine } from 'react-icons/ri'

function Picture({ id, url }) {
  const [isShowDelBtn, setIsShowDelBtn] = useState(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function ResizeCallback(event, direction, refToElement, delta) {
    console.log(delta)
    console.log(refToElement)
  }

  const handleMouseOver = (e) => {
    console.log(e.target.src)
    setIsShowDelBtn(true);
  }

  const handleMouseOut = (e) => {
    console.log(e.target.src)
    setIsShowDelBtn(false);
  }
  
  return (
    <Resizable 
      defaultSize={{
        width: 155, 
        height: 155
      }}
      onResizeStop={ResizeCallback}
    >
      { isShowDelBtn && <RiDeleteBinLine size={'2rem'} style={{
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} /> }
      <img
        ref={drag}
        src={url}
        width="100%"
        height="100%"
        alt="abc"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      
      
    </Resizable>
  );
}

export default Picture;
