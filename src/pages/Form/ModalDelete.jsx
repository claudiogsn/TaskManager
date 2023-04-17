import React, { useState } from "react";
import axios from "axios";

const FormElements = () => {

    // Variavel que Recebe os Digitados do Form através do OnChange.
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [user_create] = useState('Claudio Gomes');
    const [user_responsible] = useState('Claudio Gomes');
    const [status] = useState('Nova');
    const [user_update] = useState('Claudio Gomes');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Variavel que Recebe os Dados
        const data = {
            title: title,
            subject: subject,
            user_create: user_create,
            user_responsible: user_responsible,
            status: status,
            user_update: user_update,
        };

        // Enviando Requisição
        axios
            .post('http://127.0.0.1:8000/api/task', data)
            .then(function(response) {
                console.log('Formulário enviado com sucesso:', response.data);
                window.location.href = "http://localhost:5173/tables";

            })
            .catch(function(error) {
                console.error('Erro ao enviar formulário:', error);
            });
    };

    return(

            <div className='grid grid-cols-1 gap-9 sm:grid-cols-14'>
                <div className='flex flex-col gap-9'>
                    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                            <h3 className='font-medium text-black dark:text-white'>
                                Insira os Dados
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit} action='#'>
                            <div className='p-6.5'>

                                <div className='mb-4.5'>
                                    <label className='mb-2.5 block text-black dark:text-white'>
                                        Titulo
                                    </label>
                                    <input

                                        type='text'
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder='Insira o Titulo da Tarefa'
                                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                </div>

                                <div className='mb-4.5'>
                                    <label className='mb-2.5 block text-black dark:text-white'>
                                        Assunto
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Selecione o Assunto da Tarefa'
                                        onChange={(e) => setSubject(e.target.value)}
                                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray'>
                                    Cadastrar Tarefa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default FormElements;
