import { useState } from "react";
import img1 from "../images/leetcode.png"
import img2 from "../images/github.png"
import img3 from "../images/linkdin.png"
import img4 from "../images/codeforces.png"


const CodingPhotos = ()=>{
    let photoCollection = [img1 , img2 , img3 , img4]
    const [changing , changer] = useState(0);

    const increaser = ()=>{
        changer((effect)=>(effect < 3 ? effect + 1 : 0))
    }

    const decreaser = ()=>{
        changer((effect)=>(effect>0 ? effect-1 : 3))
    }

    let Next = "<";
    let Previous = ">"

    return(
        <>
        <button onClick={increaser} className="text-6xl text-white bg-black left-slide">{Next}</button>
        <button onClick={decreaser} className="text-6xl text-white bg-black right-slide">{Previous}</button>
        <img src={photoCollection[changing]} className="h-96 photo-editor mt-10"></img>
        </>
    )


}

export default CodingPhotos