import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../service/userService';
import User from '../User/user'

const UserSearch = (props) => {
    const [users, setUsers] = useState([{}]);
    const [change, setChange] = useState({});
    const [search, setSearch] = useState({});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(search);
        if (search.type == "group") {
            userService.getUsersByGroup(search.term).then(res => {
                setUsers(res.data)
                console.log(res)
                console.log(res.data)
                let list = res.data;
                console.log(users)
                setChange(!change)
            });
        } 
        if (search.type == "email") {
            userService.getUsersByEmail(search.term).then(res => {
                console.log(res)
                let list = JSON.stringify(res.data) 
                setUsers(res.data);
                console.log(users)
                setChange(!change);
            });
        }
        if (search.type == "name") {
            userService.getUsersByName(search.term,search.term2).then(res => {
                setUsers(res.data)
                console.log(res)
                console.log(res.data)
                setChange(!change)
            });
        }
    }
    
    return (
        <div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
            <fieldset>

            
            <legend>Search for User</legend>

            <div className="form-group">
            <div className="col-lg-8">
                <Link to="/users/create"><button type="button" class="btn btn-success">Create</button></Link>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" for="searchinput">Input Keyword</label>
            <div className="col-lg-8">
                <input id="searchinput" onChange={ evt => setSearch({...search, ...{term: evt.target.value}})} name="searchinput" type="search"  placeholder="EX: 1A2B3C" className="form-control input-md"/>
            </div>
            </div>
            <div className="form-group">
            <label className="col-lg-8 control-label" for="searchinput">Or Last Name if searching by name</label>
            <div className="col-lg-8">
                <input id="searchinput" onChange={ evt => setSearch({...search, ...{term2: evt.target.value}})} name="searchinput" type="search"  placeholder="EX: Harrsion" className="form-control input-md"/>
            </div>
            </div>

            <div className="form-group">
            <label className="col-lg-8 control-label" htmlFor="selectbasic">Search Type</label>
            <div className="col-lg-8">
                <select id="selectbasic" onChange={ evt => setSearch({...search, ...{type: evt.target.value}})} name="selectbasic" className="form-control" >
                <option value="none">None</option>
                <option value="group">By Group</option>
                <option value="email">By Email</option>
                <option value="name">By Name</option>
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
                    <div class="col-md h-75">User firstName
                    </div>
                    <div class="col-md h-75">User lastName
                    </div>
                    <div class="col-md h-75">User email
                    </div>
                    <div class="col-md h-75">User custGroup
                    </div>
                </div>
                <br/>
                {users.map( (user,idx) => <User key={idx} user={user} />)}
            </div>            

        </div>
    )
}
export default UserSearch;