//  import { useEffect, useState } from "react";
//  import Titulo from "../Titulo";
//  import styles from "./Categoria.module.css";
//  import Card from "../Card";

//  const Categoria = (props) => {
//    const [videos, setVideos] = useState([]);

//    useEffect(() => {
//      fetch("https://66927881346eeafcf46d06de.mockapi.io/api/v1/videos")
//        .then(response => response.json())
//        .then(data => {
//          setVideos(data);
//        });
//    }, []);

//    const { color, titulo } = props.datos;
//    const { categoria, videosCategoria } = styles;

   
//    const formatearTitulo = (titulo) => {
//      return titulo
//        .normalize("NFD") 
//        .replace(/[\u0300-\u036f]/g, "")
//        .toLowerCase() 
//        .replace(/\s+/g, ""); 
//    };

//    const tituloFormateado = formatearTitulo(titulo);

//    return (
//      <section className={categoria}>
//        <Titulo color={color}>
//          <h1>{titulo}</h1>
//        </Titulo>

//        <div className={videosCategoria}></div>

//        <section className={styles.container}>
//          {videos
//            .filter(video => video.categoria === tituloFormateado)
//            .map(video => (
//              <Card {...video} key={video.id} />
//            ))}
//        </section>
//      </section>
//    );
//  };

//  export default Categoria;


import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import styles from "./Categoria.module.css";
import Card from "../Card";

const Categoria = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://66927881346eeafcf46d06de.mockapi.io/api/v1/videos")
      .then(response => response.json())
      .then(data => {
        setVideos(data);
      });
  }, []);

  const { color, titulo } = props.datos;
  const { categoria, videosCategoria } = styles;

  // Función para normalizar y formatear el título
  const formatearTitulo = (titulo) => {
    return titulo
      .normalize("NFD") // Normaliza los caracteres a su forma NFD (para separar caracteres y diacríticos)
      .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
      .toLowerCase() // Convierte a minúsculas
      .replace(/\s+/g, ""); // Elimina espacios
  };

  const tituloFormateado = formatearTitulo(titulo);

  return (
    <section className={styles.categoria}>
      <Titulo color={color}>
        <h1>{titulo}</h1>
      </Titulo>

      <div className={videosCategoria}></div>

      <section className={styles.container}>
        {videos
          .filter(video => formatearTitulo(video.categoria) === tituloFormateado)
          .map(video => (
            <Card {...video} key={video.id} color={color} />
          ))}
      </section>
    </section>
  );
};

export default Categoria;



