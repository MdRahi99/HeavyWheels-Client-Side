import { useEffect } from "react"

const Title = title =>{
  useEffect(()=>{
    document.title =`${title} - Heavy Wheel`;
  },[title])
};

export default Title;