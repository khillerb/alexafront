import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import responseService from '../../service/responseService';

const Response = (props) => {
    const [viewMode, setViewMode] = useState(true);
    const [formData, setFormData] = useState({});
    const [change, setChange] = useState({});
    const defaultValues = {
        id: props.response.id,
        key: props.response.key,
        value: props.response.value,
        group: props.response.group,
    };

    const {register, handleSubmit, errors} = useForm({ mode: 'onSubmit', defaultValues: defaultValues});
    const onSubmit = (data) => {
        data.id = props.response.id   
        console.log(data);
        responseService.updateResponse(data).then(res => {
            console.log(res);
            setChange(!change);
            setViewMode(true);
        });

    }

    return(
        viewMode ? (
            <div className="row">
                <div className="col-md h-75"><button className="btn btn-light btn-outline-info" onClick={()=>setViewMode(false)}> Update </button></div>
                <div className="col-md h-75">{props.response.id}</div>
                <div className="col-md h-75">{props.response.key}</div>
                <div className="col-md h-75">{props.response.value}</div>
                <div className="col-md h-75">{props.response.group}</div>
            </div>         
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-md h-75"><button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Update</button></div>
                <div className="col-md h-75"><input ref={register} id="id" name="id" type="text" value={props.response.id} placeholder={props.response.id}></input></div>
                <div className="col-md h-75"><input ref={register} id="key" name="key" type="text" placeholder={props.response.key}></input></div>
                <div className="col-md h-75"><input ref={register} id="value" name="value" type="text"  placeholder={props.response.value}></input></div>
                <div className="col-md h-75"><input ref={register} id="group" name="group" type="text"  placeholder={props.response.group}></input></div>
                </div>
            </form>
        )
    )
}

export default Response;
