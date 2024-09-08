import React from 'react';

const ArrayComponent = () => {
  const items = [
    { nome: "Carlos", idade: 25, cidade: "São Paulo" },
    { nome: "Ana", idade: 22, cidade: "Rio de Janeiro" },
    { nome: "Beatriz", idade: 29, cidade: "Salvador" },
    { nome: "Daniel", idade: 31, cidade: "Curitiba" },
    { nome: "Eduardo", idade: 27, cidade: "Belo Horizonte" },
  ];

  // Ordenando alfabeticamente pelo nome
  const itemsOrdenados = [...items].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div>
      <h2>Lista de pessoas:</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.idade} anos, {item.cidade}
          </li>
        ))}
      </ol>

      <h2>Lista em ordem alfabética:</h2>
      <ol>
        {itemsOrdenados.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.idade} anos, {item.cidade}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArrayComponent;