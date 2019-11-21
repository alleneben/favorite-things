import React from 'react';

import { Card, CardHeader, CardBody, CardFooter } from '../components';
import { InputField } from '../components/form-controls';



class Login extends React.Component {
    constructor(props){
        super(props)
        
        this.onsubmit = this.onsubmit.bind(this)
    }

    async onsubmit(e){
        e.preventDefault()

        alert('ggg')
    }



    render(){
        return(
            <div className="container">
                <Card className="card">
                    <CardHeader className="card-header">
                        <h2>Digital Health Access</h2>
                        <img src={require('../asset/img/favicon.png')} alt="favicon"/>
                    </CardHeader>
                    <form onSubmit={(e)=>this.onsubmit(e)}>
                        <CardBody className="card-body">
                            <InputField className="form-input" type="text" placeholder="Username"/>
                            <InputField className="form-input" type="password" placeholder="Password"/>
                            <p>Forgotten Password ?</p>
                        </CardBody>
                        <CardFooter className="card-footer">
                            <button type="submit">SIGN IN</button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        )
    }
}



export default Login;