import React from 'react';
import { InputField, SelectField } from './form-controls';






const TestComponent = () => {


    const scroll = () => {
        setTimeout(()=>window.scroll({top:0,left:0,behavior:'smooth'}),9000)
    }


    return(
        <div className="test">
            {scroll()}
        <InputField className="form-input" placeholder="Username"/><br/>
        <SelectField className="form-input" placeholder="Gender" /><br/>
        <InputField className="form-input" placeholder="Username"/><br/>
        <SelectField className="form-input" placeholder="Gender" /><br/>

        </div>
    )
}

export default TestComponent;