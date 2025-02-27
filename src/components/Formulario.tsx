import Entrada from "./Entrada";
import { useState } from "react";
import Aluno from "@/core/Aluno";
import Botao from "./Botao";

interface FormularioProps{
    aluno: Aluno
}
export default function Formulario(props: FormularioProps){
    const id = props.aluno?.id
    const [nome, setNome] = useState(props.aluno?.nome ?? '')
    const [data, setData] = useState(props.aluno?.data ?? '')
    const [natural, setNatural] = useState(props.aluno?.natural ?? '')
    const [endereco, setEndereco] = useState(props.aluno?.endereco ?? '')
    const [celular, setCelular] = useState(props.aluno?.celular ?? '')
    const [email, setEmail] = useState(props.aluno?.email ?? '')
    const [pai, setPai] = useState(props.aluno?.pai ?? '')
    const [mae, setMae] = useState(props.aluno?.mae ?? '')
    const [rg, setRg] = useState(props.aluno?.rg ?? '')
    const [cpf, setCpf] = useState(props.aluno?.cpf ?? '')
    
    return (
        <div>
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} placeholder="Digite seu nome COMPLETO"/>
            <Entrada texto="Data" valor={data} valorMudou={setData}/>
            <Entrada texto="Naturalidade ( Cidade/Estado )" valor={natural} valorMudou={setNatural}/>
            <Entrada texto="Endereço ( Rua, Nº, Bairro)" valor={endereco} valorMudou={setEndereco}/>
            <Entrada texto="Número de celular (com DDD)" valor={celular} valorMudou={setCelular} placeholder="(**)****-****"/>
            <Entrada texto="E-mail" valor={email} valorMudou={setEmail}/>
            <Entrada texto="Nome do Pai" valor={pai} valorMudou={setPai}/>
            <Entrada texto="Nome da Mãe" valor={mae} valorMudou={setMae}/>
            <h2 className="font-Montserrant">Documentação</h2><br />
            <Entrada texto="RG" valor={rg} valorMudou={setRg}/>
            <Entrada texto="CPF" valor={cpf} valorMudou={setCpf}/>

            <label className="font-Montserrant">Data de preferência para pagamento</label>
            <div className="flex flex-row items-center gap-6 pt-4">
                <div className="flex items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 10</label>
                </div>
                <div className="flex items-center">
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 15</label>
                </div>
            </div>

            <div className="pt-28 flex-col">
                <div className="flex items-center mb-6">
                    <input id="default-checkbox" type="checkbox" value="" 
                    className="w-4 h-4 text-pink-600 bg-gray-100  rounded-xl
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300"><a href="" className="hover:underline">Termos de uso</a></label>
                </div>
                <Botao className="px-12">Próximo</Botao>
            </div>
        </div>
    )
}