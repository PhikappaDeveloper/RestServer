const {response} = require('express')


const usuariosGet = (req = request, res = response) => {

    //const query = req.query

    const {q , nombre, apikey} = req.query

    res.json({
        msg: 'get Api - usuarioGet',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res = response) => {

    //const id = req.params.id

    const { id } = req.params

    res.json({
        ok: true,
        msg: 'put Api UsuarioPut',
        id
    })
}

const usuariosPost= (req, res = response) => {

    //const body = req.body
    const {nombre, edad} = req.body  //destructuracion

    res.json({
        msg: 'get Api - usuarioPost',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete Api usuarioDelete'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch Api usuarioPatch'
    })
}

module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}