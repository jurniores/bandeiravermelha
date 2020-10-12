import validator from 'validator';

import {toast} from 'react-toastify';
var errors = []
function Validation(dados){
    errors = []
            if(validator.isEmail(dados.email)===false){
                errors.push(1)
                toast.error('Email inválido')
            } 
            if(dados.password.length<3){
                errors.push(2)
                toast.error('Senha menor que 3 caracteres')
            } 
  
  return errors

}

export default Validation;