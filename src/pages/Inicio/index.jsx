import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
// import videos from "../../data/db.json"
import styles from './index.module.css';
import { useEffect, useState } from "react";
import Categoria from "../../components/Categoria";

function Inicio() {

    // const [videos, setVideos] = useState([])

    // useEffect(() => {
    //     fetch("https://my-json-server.typicode.com/fernando-hess/alura-flix-api/videos")
    //         .then(response => response.json())
    //         .then(data => {
    //             setVideos(data)
    //         })
    // }, [])

    

    const categorias = [
        {
            titulo: "Front End",
            color: "#6BD1FF"
        },
        {
            titulo: "Back End",
            color: "#00C86F"
        },
        {
            titulo: "Innovación y Gestión",
            color: "#FFBA05"
        } 
    ]

    return (
        <>

            <Banner img="home" color="#0012d84e" />
            {/* <Titulo color="#6BD1F1">
                <h1>FRONT END</h1>
            </Titulo> */}

             {/* <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

           
            <Titulo color="#00C86F">
                <h1>BACK END</h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}

            </section>

            <Titulo color="#FFBA05">
                <h1>INNOVACIÓN Y GESTIÓN</h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}

            </section>  */}

            {
                categorias.map( (categoria) => <Categoria datos={categoria} key={categoria.titulo} /> )
            }
            




        </>
    )
}

export default Inicio;