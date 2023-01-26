import  express  from "express";
import autores from "../models/Autor.js";
import livros from "./livrosRoutes.js";
import autor from "./autoresRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })
    app.use(
        express.json(),
        livros,
        autor
    )
}



export default routes; 