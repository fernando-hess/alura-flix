// import Card from "../Card";
// import Titulo from "../Titulo";
// import styles from "./Destacado.module.css"

// const Destacado = () => {
//     return (
//         <section className={styles.destacado}>
//             <div>
//                 <Titulo>
//                     <h1>categoria</h1>
//                 </Titulo>
//                 <h2>titulo</h2>
//                 <p>descripcion</p>
//             </div>

//             <div className={styles.videoDestacado}>
                

//             </div>


//         </section>
//     )
// }

// export default Destacado;

import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import styles from "./Destacado.module.css";

const Destacado = (color) => {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchRandomVideo = async () => {
            try {
                const response = await fetch("https://66927881346eeafcf46d06de.mockapi.io/api/v1/videos");
                const data = await response.json();
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setVideo(data[randomIndex]);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchRandomVideo();
    }, []);

    const convertToEmbedLink = (url) => {
        const urlObj = new URL(url);
        if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/embed") {
            return url; 
        } else if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/watch") {
            const videoId = urlObj.searchParams.get("v");
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
            }
        }
        return url; 
    };

    return (
        <section className={styles.destacado}>
            {video && (
                <>
                    <div className={styles.descripcionVideo}>
                        <p className={styles.destacados}>DESTACADOS...</p>
                        <div className={styles.tituloContainer}><Titulo color="#2271D1">
                            <h1>{video.categoria}</h1>
                        </Titulo></div>
                        <h2 className={styles.tituloVideo}>{video.titulo}</h2>
                        <p>{video.descripcion}</p>
                    </div>
                    <div className={styles.videoDestacado}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={convertToEmbedLink(video.link)}
                            title={video.titulo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
            )}
        </section>
    );
};

export default Destacado;
