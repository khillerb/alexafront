import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import userService from '../../service/userService';

const UserCreate = (props) => {
    const [formData,setFormData]= useState({});
    //const [change,setChange] = useState({});
    const onSubmit = (data) => {
        console.log(data)
        userService.createUser(data).then(res=> console.log(res))
    }
    const {register, handleSubmit, errors} = useForm({ mode: 'onSubmit'});

    return (
            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>

            <legend>Create a User</legend>

            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">User Echo ID</label>
            <div className="col-lg-8">
                <input name="userEchoID" ref={register} type="search" className="form-control input-md"/>
            </div>
            </div>
            <div className="form-group">
            <label className="col-lg-8 control-label" HTMLfor="searchinput">User First Name:</label>
            <div className="col-lg-8">
                <input name="firstName" ref={register} type="search" className="form-control input-md"/>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">User Last Name</label>
            <div className="col-lg-8">
                <input name="lastName" ref={register} type="search" className="form-control input-md"/>
            </div>
            </div>
            
            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">User Email</label>
            <div className="col-lg-8">
                <input name="email" ref={register} type="search" className="form-control input-md"/>
            </div>
            </div>
            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="searchinput">User Group</label>
            <div className="col-lg-8">
                <input name="group" ref={register} type="search" className="form-control input-md"/>
            </div>
            </div>
            <div className="form-group">
            <div className="col-lg-8">
                <Link to="/responses/create"><button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button></Link>
            </div>
            </div>

            </fieldset>
            </form>
    )
}
export default UserCreate;