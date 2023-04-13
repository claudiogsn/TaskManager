import React, { useState, useEffect } from "react";
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';
import axios from 'axios';

const url = "http://127.0.0.1:8000/api/task"


const Tables = () => {

    git init    return (
    <DefaultLayout>
      <Breadcrumb pageName='Tarefas' />

      <div className='flex flex-col gap-10'>
        <TableThree />
      </div>
    </DefaultLayout>
  )
};

export default Tables;


