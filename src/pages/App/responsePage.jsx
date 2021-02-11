import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import responseService from '../../service/responseService';

const ResponsePage = (props) => {
  const [responses, setResponses] = useState([{}]);
  const [change, setChange] = useState({});
  useEffect(()=>{
    responseService.getResponses().then(res => {
      setResponses(res.data)
      console.log(res.data)
    })
  }, [props, change])
  
    return (
        <div>
        <h1 className="text-center">Response List</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Response Id</td>
              <td>Response Key</td>
              <td>Response Value</td>
              <td>Response Group</td>
            </tr>
            
          </thead>
          <tbody>
            {responses.map(
                response =>
                <tr key = {response.id}>
                  <td>{response.id}</td>
                  <td>{response.key}</td>
                  <td>{response.value}</td>
                  <td>{response.group}</td>
                </tr>)}
          </tbody>
  
        </table>
  
      </div>
    )
}
export default ResponsePage