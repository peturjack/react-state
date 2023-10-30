import "./card.css"

type Props = {
    title:string,
    image: string,
    about: string
}
  export function Card({title, image, about}:Props) {
    const shortAbout = about.slice(0 , 150) + "..."
    return(
        <>
            
            <main className="card-container">
                <div className="image-container">
                    <img src={image} alt="beautiful mountain" />
                </div>
                <div className="text-under-card">
                    <h1>{title}</h1>
                    <p>{shortAbout}</p>
                </div>
            </main>
            
       
        </>
    )
        
    
}

