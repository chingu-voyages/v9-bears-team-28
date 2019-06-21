import axios from "axios";
import * as ACTIONS from "./actionTypes";
import { toast } from "react-toastify";
import {API_URL} from "../constants/constant";

export const getVoyages= ()=>async dispatch=>{
    try{
        const resp=await axios.get(API_URL+"/voyages");
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
        toast.error('Something went wrong. Please try again later.');
    }
}