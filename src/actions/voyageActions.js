import axios from "axios";
import * as ACTIONS from "./actionTypes";

export const getVoyages= ()=>async dispatch=>{
    try{
        const resp=await axios.get("http://localhost:8080/api/voyages/");
        console.log(resp);
        dispatch({
            type:ACTIONS.GET_VOYAGES,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.GET_VOYAGES_ERROR,
            payload:err
        });
    }
}