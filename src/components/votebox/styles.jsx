import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
export const Rower = styled(Row)
``

export const Buttoner = styled(Button)

`
width:100%;
padding:10px;
text-transform:uppercase;
margin-left:auto !important;
margin-right:auto !important;
margin-top:10px;
display:block;
`

export const Contstyled  = styled(Container)
`
width:70%;

.col-12 {
    margin-top:30px;
    margin-bottom:10px !important;
   
    &.chapa01 {
        display: table-cell;
        padding:50px !important;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
        background-color:#eee;
        border-radius:30px;
        h2{
            font-size:24px;
            margin-bottom:20px;
        }
        h3 {
            margin-top:30px;
            font-size:20px;
            margin-bottom:30px;
        }
        ul {
            margin:0px;
            padding:0px;
            li{
              list-style-type:none;
              margin-left:35px;  
            }
        }
    }
}
input[type=text] {
    background:none !important;
    border:0px !important;
    border-bottom:1px solid #acc2e1 !important;
}
.styledButton {
    background-color:#0c71c3 !important;
}
`
