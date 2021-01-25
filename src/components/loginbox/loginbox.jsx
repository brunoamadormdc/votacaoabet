import React, { useRef, useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Contstyled } from './styles'
import * as Services from '../../services/services'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { addLogin } from '../../actions/login/index'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


export default function Loginbox(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [msg, setMessage] = useState('');
    const [beneficiario, setBenef] = useState(true)
    const formvalid = useSelector((state) => state.Loginreducer)
    useEffect(() => {
       if(formvalid.status == false) {
           setBenef(false)
       }
    });
    
    const testaLogin = () => {
        if (cpf != '' && senha != '') {
            console.log(cpf, senha)
            Services.Login(cpf,senha)
                .then(res => {
                    console.log(res)
                    dispatch(addLogin(res.data))
                    if (res.data.beneficiario == null) {
                        setMessage('Usuário não encontrado.')
                        setBenef(false)
                    }
                    else if (res.data.beneficiario != null && res.data.Assembleia == 0) {
                        setMessage('Seu nível de usuário não permite participação na votação.')
                        setBenef(false)
                    }
                    else {
                        Services.testarVotacao(res.data.beneficiario.CD_CPF)
                        .then(r=>{
                            if(r) {
                                console.log(r)
                                setBenef(true)
                                history.push('/votar')
                            }
                            else {
                               setMessage('Você já realizou a sua votação. Não é possível votar novamente.')
                               setBenef(false)
                            }
                        })
                        .catch(erro=>{
                            setMessage('Ocorreu um erro ao fazer o login.')
                            setBenef(false)
                        })
                        
                        
                    }
                })
                .catch(err => {
                    setMessage('Usuário não encontrado.')
                    console.log(err)
                    setBenef(false)
                })
        }
    }
    return (
        <Contstyled>
            {!beneficiario && <Alert variant="danger" onClick={() => setBenef(true)} dismissible>
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert>
            }
            <Row>
                <Col xs={12}>
                    <Form.Control placeholder="Digite o seu CPF" id="cpf" onBlur={(e) => setCpf(e.target.value)} type="text" />
                </Col>
                <Col xs={12}>
                    <Form.Control placeholder="Digite a sua senha" id="senha" onBlur={(e) => setSenha(e.target.value)} type="text" />
                </Col>
                <Col xs={12}>
                    <Button className="styledButton" variant="primary" size="lg" block onClick={() => testaLogin()}>
                        Entrar
                </Button>
                </Col>
            </Row>
        </Contstyled>
    )
}