import autores from "../models/Autor.js";


class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    } 

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({menssage: `${err.message} - Id do Autor não localizado`})
            } else {
                res.status(200).send(autores)
            }
        })
    }
    
    
    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - FALHA AO CADASTRAR LIVRO`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'autor atualizado com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor= (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livroexcluido com sucesso'})
            } else {
                res.status(500).send({menssage: err.menssage})
            }
        })
    }
}

export default AutorController;