/*
O controlador de dados lida com as requisições do 
usuário e, também faz as respostas ao usuário.
Portanto, iremos importar as bibliotecas: 
Request e Response do framework Express
*/
import { Request, Response } from "express";
/*
Importar a função que traz todos os usuarios
*/
import { getAllUsers} from "../models/userModel";

export async function getUsers(req:Request, res:Response):Promise<void>{
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json(`Erro ao listar os usuarios -> ${error}`);
    }
}