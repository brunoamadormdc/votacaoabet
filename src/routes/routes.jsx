import {Switch, Route} from 'react-router-dom'
import Login from  '../pages/login/login'
import Success from  '../pages/success/success'
import Vote from  '../pages/vote/vote'

export default function Routes () {
    return (
       <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/votar" exact={true} component={Vote} />
        <Route path="/confirmacao" exact={true} component={Success} />
      </Switch> 
    )
}