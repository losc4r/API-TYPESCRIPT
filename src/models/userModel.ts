//importar a biblioteca do Row(Linha)Data(Dados)(Pacote)
//Guardar todos os dados que retorna da consulta Select
import { RowDataPacket } from "mysql2";
//importando a conexao(pool) com o banco de dados para 
//fazer uma consulta nas tabelas do banco
import pool from "../database";

//A interface User faz uma descricao da estrutura
//de dados da tabela Usuario.
export interface User extends RowDataPacket{
    id:number;
    name:string;
    email:string;
}
/*
Exportar a função getAllUsers(pegarTodosOsUsuarios)
do banco de dados.
Esta função é do tipo ascíncrona e, portanto, aguarda
um processamento interno para realizar a exportação. 
o processamento será feito pela linha do await(aguardar)
*/
export async function getAllUsers():Promise<User[]>{
    const [rows] = await pool.query<User[]>("Select * from users",[]);
    return rows;

}
