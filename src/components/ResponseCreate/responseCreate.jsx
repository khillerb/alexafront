import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import responseService from '../../service/responseService';

const ResponseCreate = (props) => {
    const [formData,setFormData]= useState({});
    //const [change,setChange] = useState({});
    const onSubmit = (data) => {
        console.log(data);
        responseService.createResponse(data).then(res=> console.log(res))
    }
    const defaultID = {userEchoID : "none"}
    const {register, handleSubmit, errors} = useForm({ mode: 'onSubmit', defaultValues:defaultID});

    return (
            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>

            <legend>Create a Response</legend>

            <div className="form-group">
            <label className="col-lg-8 control-label" HTMLfor="searchinput">Response Key:</label>
            <div className="col-lg-8">
                <input ref={register} placeholder="SmarterInfo, IntelligentFilter, FunFact ..." name="key" type="search" className="form-control input-md"/>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">Response:</label>
            <div className="col-lg-8">
                <input ref={register} name="value" type="search" className="form-control input-md"/>
            </div>
            </div>
            
            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">Response Group:</label>
            <div className="col-lg-8">
                <input ref={register} name="group" type="search" className="form-control input-md"/>
            </div>
            </div>
            <div className="form-group">
            <div className="col-lg-8">
                <Link to="/responses/search" ><button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button></Link>
            </div>
            </div>

            </fieldset>
            </form>
    )
}
export default ResponseCreate;