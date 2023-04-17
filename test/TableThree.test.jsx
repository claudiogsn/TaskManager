import React from 'react';
import { render } from '@testing-library/react';
import FormElements from '/src/pages/Form/FormElements.jsx';
import expect from "expect";



test('MeuComponente é renderizado corretamente', () => {
    const { getByText } = render(<FormElements />);

    // Use getByText para selecionar elementos com o texto desejado
    const texto = getByText('Dados');

    // Use as funções de afirmação do Jest para verificar se o resultado é o esperado
    expect(texto).toBeInTheDocument();
});