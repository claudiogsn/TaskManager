import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import DefaultLayout from '../../layout/DefaultLayout.jsx';


const FormLayout = () => {

    const [tasks, setTask] = useState([])

    const {id} = useParams()

    useEffect(() => {

        axios
            .get(`http://127.0.0.1:8000/api/task/${id}`)
            .then(function(response) {
                console.log(response.data);
                setTask(response.data.data)
            })
            .catch(function(error) {
                console.error('Erro ao excluir item:', error);
            });
     },[id])


    // Variavel que Recebe os Digitados do Form através do OnChange.
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();



        // Enviando Requisição
        axios
            .put(`http://127.0.0.1:8000/api/task/${id}?title=${title}&subject=${subject}`)
            .then(function(response) {
                console.log('Formulário enviado com sucesso:', response.data);
                window.location.href = "http://localhost:5173/tables";

            })
            .catch(function(error) {
                console.error('Erro ao enviar formulário:', error);
            });
    };


    return(
        <DefaultLayout>
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
                                    required
                                    placeholder={tasks.title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                />
                            </div>

                            <div className='mb-4.5'>
                                <label className='mb-2.5 block text-black dark:text-white'>
                                    Assunto
                                </label>
                                <input
                                    type='text'
                                    required
                                    placeholder={tasks.subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                />
                            </div>
                            <button
                                type="submit"
                                className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray'>
                                Atualizar Tarefa
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </DefaultLayout>
    )
}

export default FormLayout;
