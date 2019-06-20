import axios from "axios";
import * as ACTIONS from "./actionTypes";

export const getProjects=(voyageId)=>async dispatch=>{
    try{
        const resp=await axios.get("http://localhost:8080/api/projects/"+voyageId);
        console.log(resp);
        dispatch({
            type:ACTIONS.GET_PROJECTS,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.GET_PROJECTS_ERROR,
            payload:err
        });
    }
}