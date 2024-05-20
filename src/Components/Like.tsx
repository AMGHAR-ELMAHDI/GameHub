import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props{
  onclick: () => void; 
}

function Like({onclick}: Props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onclick();
  }
  if (status)
    return <AiFillHeart size={100} color="red" onClick={toggle} />;
  else
    return <AiOutlineHeart size={100} color="red" onClick={toggle} />;
}

export default Like;
