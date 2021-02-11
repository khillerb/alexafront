import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import userService from '../../service/userService';

const User = (props) => {
    const [viewMode, setViewMode] = useState(true);
    const [formData, setFormData] = useState({});
    const [change, setChange] = useState({});
    const defaults = {
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        email: props.user.email,
        group: props.user.group,
    };
    const {register, handleSubmit, errors} = useForm({ mode: 'onSubmit', defaultValues: defaults});
    const onSubmit = (data) => {
        data.id = props.user.id    
        data.userEchoID = props.user.userEchoID    
        console.log(data);
        userService.updateUser(data).then(res => {
            console.log(res);
            setChange(!change);
            setViewMode(true);
        });

    }
    return(
        viewMode ? (
            <div className="row">
                <div className="col-md h-75"><button className="btn btn-light btn-outline-info" onClick={()=>setViewMode(false)}> Update </button></div>
                <div className="col-md h-75">{props.user.firstName}</div>
                <div className="col-md h-75">{props.user.lastName}</div>
                <div className="col-md h-75">{props.user.email}</div>
                <div className="col-md h-75">{props.user.group}</div>
            </div>         
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-md h-75"><button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Update</button></div>
                <div className="col-md h-75"><input ref={register} id="firstName" name="firstName" type="text" placeholder={props.user.firstName}></input></div>
                <div className="col-md h-75"><input ref={register} id="lastName" name="lastName" type="text" placeholder={props.user.lastName}></input></div>
                <div className="col-md h-75"><input ref={register} id="email" name="email" type="text"  placeholder={props.user.email}></input></div>
                <div className="col-md h-75"><input ref={register} id="custGroup" name="group" type="text"  placeholder={props.user.group}></input></div>
                </div>
            </form>
        )
    )
}

export default User;
