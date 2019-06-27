import axios from "axios";
import * as ACTIONS from "./actionTypes";
import { API_URL } from "../constants/constant";

export const getAllTeams=()=>async dispatch=>{
    try{
        dispatch({
            type:ACTIONS.GET_ALL_TEAMS_LOADING
        });
        const resp=await axios.get(API_URL+"/teams/");
        console.log(resp);
        dispatch({
            type:ACTIONS.GET_ALL_TEAMS,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.GET_ALL_TEAMS_ERROR,
            payload:err
        });
    }
}

export const getTeam=(id)=>async dispatch=>{
    try{
        dispatch({
            type:ACTIONS.GET_TEAM_LOADING,
        });
        const resp=await axios.get(API_URL+"/teams/"+id);
        console.log(resp);
        dispatch({
            type:ACTIONS.GET_TEAM,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.GET_TEAM_ERROR,
            payload:err
        });
    }
}

export const createTeam=(data)=>async dispatch=>{
    try{
        dispatch({
            type:ACTIONS.CREATE_TEAM_LOADING,
        });
        const resp=await axios.post(API_URL+"/teams/",data);
        console.log(resp);
        dispatch({
            type:ACTIONS.CREATE_TEAM,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.CREATE_TEAM_ERROR,
            payload:err
        });
    }
}

export const updateTeam=(id,data)=>async dispatch=>{
    try{
        dispatch({
            type:ACTIONS.UPDATE_TEAM_LOADING,
        });
        const resp=await axios.put(API_URL+"/teams/"+id,data);
        console.log(resp);
        dispatch({
            type:ACTIONS.UPDATE_TEAM,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.UPDATE_TEAM_ERROR,
            payload:err
        });
    }
}

export const deleteTeam=(id)=>async dispatch=>{
    try{
        dispatch({
            type:ACTIONS.DELETE_TEAM_LOADING,
        });
        const resp=await axios.delete(API_URL+"/teams/");
        console.log(resp);
        dispatch({
            type:ACTIONS.DELETE_TEAM,
            payload:resp.data
        });
    }catch(err){
        console.log(err);
        dispatch({
            type:ACTIONS.DELETE_TEAM_ERROR,
            payload:err
        });
    }
}