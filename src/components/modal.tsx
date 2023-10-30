import "./modal.css"
import {ReactEventHandler, SyntheticEvent} from "react"
import video from "../images/Scary Face With Scream.mp4"
export function Modal() {
    const initVideo:ReactEventHandler<HTMLVideoElement> = (event:SyntheticEvent<HTMLVideoElement>) => {
        let vid = event.target as HTMLVideoElement
        console.log(vid)
        vid.volume = 0.01
    }
    return(
        <>
            <div className="around-the-world">

            <div className="modal">
            <video id="myVideo" autoPlay onCanPlay={initVideo} loop playsInline src={video} >
                
            </video>
            </div>
            <h1 className="happy">Happy Halloween </h1>
            </div>
        </>
    )
}