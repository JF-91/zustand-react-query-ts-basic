import api from "../api/github";
import { useQuery } from "@tanstack/react-query";
import {  Repository } from "./types";

async function fetchRepos(){
    const {data } = await api.get<Repository[]>('/users/JF-91/repos')

    return data
}


export function useFetchRepository(){
    return useQuery(['repos'], fetchRepos)
}
