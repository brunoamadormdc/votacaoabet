import React from 'react'
import Votebox from '../../components/votebox/votebox'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
export default function Vote(props) {
    const history = useHistory();
    const formvalid = useSelector((state) => state.Loginreducer)
    if(formvalid.status == false || formvalid.status == null) {
      history.push('/')
    }
    return (
        <Votebox />
    )
}