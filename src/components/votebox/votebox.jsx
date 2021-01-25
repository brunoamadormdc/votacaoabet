import React, { useRef, useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Contstyled, Rower, Buttoner } from './styles'
import * as Services from '../../services/services'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { voteOK } from '../../actions/login/index'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


export default function Votebox() {
    const dispatch = useDispatch();
    const history = useHistory();
    const beneficiario = useSelector((state) => state.Loginreducer)
    const nome = beneficiario.beneficiario.NM_NomeUsuario;
    const cpf = beneficiario.beneficiario.CD_CPF;
    const [msg, setMessage] = useState('');
    const setVoto = (voto) =>{
        Services.testarVotacao(cpf)
        .then(r=>{
            if(r) {
                Services.Votar(cpf,nome,voto)
                .then(res => {
                    if(!res) {
                        history.push('/')
                    }
                    else {
                        dispatch(voteOK())
                        history.push('/sucesso')
                    }
             })
                .catch(err => {
                    setMessage('Ocorreu um erro ao votar.')
                })
            }
            else {
                history.push('/');
            }
        })
        .catch(erro=>{
            history.push('/');
        })
      
    }
    return (
        <Contstyled>
            {msg != '' && <Alert variant="danger" dismissible>
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert>
            }
            <Rower>
                <h4>Olá, {nome}</h4></Rower>
             <Rower>
                <Col xs={12} className="chapa01">
                 <h2>CHAPA - SUPERAÇÃO E INOVAÇÃO</h2>
                 <h3>Inscritos</h3>
                 <h3>05 - TITULARES DO CONSELHO DE ADMINISTRAÇÃO</h3>
                 <ul>
                     <li>
                     DANIELA MACEDO PEREIRA CPF:  18711216808
                     </li>
                     <li>
                     JOAQUIM GOMES DE SOUSA CPF:  05079977868
                     </li>
                     <li>
                     SHIRLEI APARECIDA FIGUEIREDO CPF:  13457364877
                     </li>
                     <li>
                     ARLETE CIUCIO CPF:  12665512807
                     </li>
                     <li>
                     VANDA DE SOUZA CPF:  12557169838
                     </li>
                 </ul>
                 <h3>03 - SUPLENTES DO CONSELHO DE ADMINISTRAÇÃO</h3>
                 <ul>
                     <li>
                     WALTER LYRIO DO VALLE CPF:  94900434868
                     </li>
                     <li>
                     VALDETE IZUMI DOS SANTOS CPF:  08067718873
                     </li>
                     <li>
                     HUGO LEONARDO TORRES DE OLIVEIRA CPF:  21897246862
                     </li>
                 </ul>
                 <h3>03 - TITULARES DO CONSELHO FISCAL</h3>
                 <ul>
                     <li>
                     MARIA TERESINHA NAVES DA SILVA CPF:  09348060805
                     </li>
                     <li>
                     JOSÉ GONÇALO DA SILVA CPF:  48777587804
                     </li>
                     <li>
                     ALBERTO BATISTA DE ALMEIDA CPF:  05194751869
                     </li>
                 </ul>
                 <Buttoner  onClick={() => setVoto(1)}>Votar nesta chapa</Buttoner>
                </Col>
                <Col xs={12} className="chapa01">
                <Buttoner onClick={() => setVoto(0)}>Anular o voto</Buttoner>
                </Col>
                
            </Rower>
        </Contstyled>
    )
}