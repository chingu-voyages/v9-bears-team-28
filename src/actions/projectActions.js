import axios from "axios";
import * as ACTIONS from "./actionTypes";
import { API_URL } from "../constants/constant";

export const getProjects=(voyageId)=>async dispatch=>{
    try{
        const resp=await axios.get(API_URL+"/projects/"+voyageId);
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