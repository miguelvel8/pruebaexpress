const express= require('express');

const router=express.Router(); //(me devuelve un objeto)

router.get('/', (req,res) => {

    res.send('Hola bebesitas');

});           //define una ruta inicial

module.exports=router; //exporto el objeto 