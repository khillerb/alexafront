import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import responseService from '../../service/responseService';
import Response from '../Response/response';


const ResponseSearch = (props) => {
    const [responses, setResponses] = useState([{}]);
    const [change, setChange] = useState({});
    const [search, setSearch] = useState({});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(search);
        if (search.type == "group") {
            responseService.getResponsesByUserGroup(search.term).then(res => {
                setResponses(res.data)
                console.log(res)
                console.log(res.data)
                let list = res.data;
                console.log(responses)
                setChange(!change)
            });
        } 
        if (search.type == "type") {
            responseService.getResponsesByType(search.term).then(res => {
                setResponses(res.data)
                console.log(res)
                console.log(res.data)
                let list = res.data;
                console.log(responses)
                setChange(!change)
            });
        }
        //let unique_list = new Set(list); 
        //list = Array.from(unique_list); 
    }
    
    return (
        <div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
            <fieldset>

            <legend>Search for Response</legend>

            <div className="form-group">
            <div className="col-lg-8">
                <Link to="/responses/create"><button type="button" class="btn btn-success">Create</button></Link>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" for="searchinput">Input Keyword</label>
            <div className="col-lg-8">
                <input id="searchinput" onChange={ evt => setSearch({...search, ...{term: evt.target.value}})} name="searchinput" type="search"  placeholder="EX: 1A2B3C" className="form-control input-md"/>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="selectbasic">Search Type</label>
            <div className="col-lg-8">
                <select id="selectbasic" onChange={ evt => setSearch({...search, ...{type: evt.target.value}})} name="selectbasic" className="form-control" >
                <option value="none">None</option>
                <option value="group">By Group</option>
                <option value="type">By Type</option>
                </select>
            </div>
            </div>
            <div className="form-group">
            <div className="col-lg-8">
                <button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
            </div>
            </div>

            </fieldset>
            </form>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md h-75">User Id
                    </div>
                    <div class="col-md h-75">User Key
                    </div>
                    <div class="col-md h-75">User Value
                    </div>
                    <div class="col-md h-75">User Group
                    </div>
                </div>
                <br/>
                {responses.map( (response,idx) => <Response key={idx} response={response} />)}
            </div>

        </div>
    )
}
export default ResponseSearch;