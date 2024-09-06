import React from "react";

const InfoComponent = () => {
  // Definindo as variáveis
  const nome = "SeuNome";
  const sobrenome = "SeuSobrenome";
  const matricula = "123456";
  const nomeProfessor = "NomeDoProfessor";
  const nomeDisciplina = "NomeDaDisciplina";

  // Função para retornar nome completo
  const nomeCompleto = `${nome} ${sobrenome}`;
  const infoMatricula = `${nomeCompleto}, Matrícula: ${matricula}`;
  const infoProfessor = `Professor: ${nomeProfessor}, Disciplina: ${nomeDisciplina}`;

  return (
    <div>
      <h1>Informações do Aluno</h1>
      <p>{infoMatricula}</p>
      <p>{infoProfessor}</p>
    </div>
  );
};

export default InfoComponent;