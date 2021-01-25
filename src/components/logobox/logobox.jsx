import React from 'react'
import {Logo,Tit} from './styles'

export default function Logobox({imagem,title}) {
    return (
        <>
        <Logo src={imagem}></Logo>
        <Tit>{title}</Tit>    
        </>
    )
}