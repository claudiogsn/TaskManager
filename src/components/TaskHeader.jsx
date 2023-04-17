import React, { useState } from 'react';

const TaskHeader = () => {
  const [items, setItems] = useState([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    // Outros itens do grid
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [itemIdToUpdate, setItemIdToUpdate] = useState(null);
  const [nomeInput, setNomeInput] = useState('');

  // Função para abrir o modal com o ID do item a ser atualizado
  const openModal = (itemId) => {
    // Recuperar o nome atual do item a partir do grid usando o ID
    const nome = getNomeDoItem(itemId);

    // Atualizar o estado com as informações do item e abrir o modal
    setItemIdToUpdate(itemId);
    setNomeInput(nome);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    // Limpar o estado e fechar o modal
    setItemIdToUpdate(null);
    setNomeInput('');
    setModalOpen(false);
  };

  // Função para atualizar o item
  const updateItem = () => {
    // Realizar a requisição PUT para a API, informando o ID e o novo nome
    const itemId = itemIdToUpdate;
    const novoNome = nomeInput;
    // Fazer a requisição PUT para a API com o ID e o novo nome

    // Atualizar o estado com as informações atualizadas do item
    setItems(prevItems =>
        prevItems.map(item =>
            item.id === itemId ? { ...item, nome: novoNome } : item
        )
    );

    // Fechar o modal
    closeModal();
  };

  // Função auxiliar para obter o nome do item pelo ID
  const getNomeDoItem = (itemId) => {
    const item = items.find(item => item.id === itemId);
    return item ? item.nome : '';
  };

  return (
      <div>
        {/* Grid */}
        <div id="grid">
          {/* Itens do grid */}
          {/* Exemplo de item com botão de atualizar */}
          {items.map(item => (
              <div key={item.id} className="grid-item">
                <span>ID: {item.id}</span>
                <span>Nome: {item.nome}</span>
                <button onClick={() => openModal(item.id)}>Editar</button>
              </div>
          ))}
          {/* Outros itens do grid */}
        </div>

        {/* Modal */}
        {modalOpen && (
            <div id="modal" className="modal">
              <div className="modal-content">
                <h2>Editar Item</h2>
                <form onSubmit={updateItem}>
                  <input
                      type="text"
                      id="nomeInput"
                      placeholder="Nome"
                      value={nomeInput}
                      onChange={(e) => setNomeInput(e.target.value)}
                  />
                  <button type="submit">Atualizar</button>
                  <button onClick={closeModal}>Fechar</button>
                </form>
              </div>
            </div>
        )}
      </div>
  );
};
export default TaskHeader;
