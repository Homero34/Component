// FirstComponent.jsx
import React from 'react';

const FirstComponent = () => {
  const nome = "João";
  const sobrenome = "Silva";
  const matricula = "123456";
  const nomeProfessor = "Professor Carlos";
  const nomeDisciplina = "Desenvolvimento Web";

  return (
    <div>
      <h1>Bem-vindo(a), {nome} {sobrenome}!</h1>
      <p>Matrícula: {matricula}</p>
      <p>Disciplina: {nomeDisciplina} com {nomeProfessor}</p>
    </div>
  );
};

export default FirstComponent;