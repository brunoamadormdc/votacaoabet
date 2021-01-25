import axios from 'axios'

const uri = 'https://abet.com.br/apiabet/public/api/'
const urivoto = 'https://abet.com.br/apivotacao/'
export function Login(cpf,password) {
     return new Promise((resolve,reject)=>{
         const obj = {
             usuario:cpf,
             senha:password
         }
         axios.post(uri+'logarteste',obj)
            .then(res=>{
               resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
            
  
      })
  }

  export function testarVotacao(cpf) {
    const obj = {
        cpf:cpf
    }
    return new Promise((resolve,reject)=>{
        axios.get(urivoto +'testarvoto/' + cpf)
        .then(res=>{
            console.log(res)
            resolve(res.data)
        })  
        .catch(err=>{
            reject(err)
        })
    })
  }

  export function Votar(cpf,nome,voto) {
      const obj = {
          cpf:cpf,
          nome:nome,
          voto:voto
      }
      return new Promise((resolve,reject) => {
            axios.get(urivoto +'votar/'+cpf+'/'+nome+'/'+voto)
            .then(res=>{
                console.log(res)
                resolve(res.data)
            })
            .catch(err=>{
                console.log(err)
                reject(err)
            })
      })
  }
       