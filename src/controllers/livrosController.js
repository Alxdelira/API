import livros from "../models/Livro.js";


class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros);
        });
    } 

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({menssage: `${err.message} - Id do Livro não localizado`})
            } else {
                res.status(200).send(livros)
            }
        })
    }
    
    
    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - FALHA AO CADASTRAR LIVRO`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livroexcluido com sucesso'})
            } else {
                res.status(500).send({menssage: err.menssage})
            }
        })
    }
}

export default LivroController;