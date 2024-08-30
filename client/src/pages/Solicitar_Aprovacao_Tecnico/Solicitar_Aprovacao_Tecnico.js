import React, { useState } from 'react';
import './Solicitar_Aprovacao_Tecnico.css';

function SolicitarAprovacaoTecnico() {
  const [equipamento, setEquipamento] = useState('');
  const [parecer, setParecer] = useState('');
  const [tipo, setTipo] = useState('qualificacao');
  const [valor, setValor] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [certificado, setCertificado] = useState(null);

  const handleEquipamentoChange = (e) => setEquipamento(e.target.value);
  const handleParecerChange = (e) => setParecer(e.target.value);
  const handleTipoChange = (e) => setTipo(e.target.value);
  const handleValorChange = (e) => setValor(e.target.value);
  const handleObservacoesChange = (e) => setObservacoes(e.target.value);
  const handleCertificadoChange = (e) => setCertificado(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar o formulário, como enviar os dados para um servidor
    console.log({
      equipamento,
      parecer,
      tipo,
      valor,
      observacoes,
      certificado,
    });
  };

  return (
    <div className="container">
      <main className="aprovacaoTecnico">
        <form className="formaprovacaoTecnico" onSubmit={handleSubmit}>
          <label htmlFor="equipamento">Equipamento:</label>
          <input
            type="text"
            id="equipamento"
            name="equipamento"
            value={equipamento}
            onChange={handleEquipamentoChange}
          />
            <label htmlFor="observacoes">MOTIVOS/OBSERVAÇÕES:</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={observacoes}
            onChange={handleObservacoesChange}
          ></textarea>

          

          <label htmlFor="tipo">Tipo:</label>
          <select id="tipo" name="tipo" value={tipo} onChange={handleTipoChange}>
            <option value="qualificacao">QUALIFICAÇÃO</option>
            <option value="manutencao">MANUTENÇÃO</option>
            <option value="calibracao">CALIBRAÇÃO</option>
          </select>

          <label htmlFor="valor">Valor:</label>
          <input
            type="text"
            id="valor"
            name="valor"
            value={valor}
            onChange={handleValorChange}
          />

          <label htmlFor="parecer">Parecer Tec.:</label>
          <textarea
            id="parecer"
            name="parecer"
            value={parecer}
            onChange={handleParecerChange}
          ></textarea>

          <label htmlFor="certificado">Anexar Certificado:</label>
          <input
            type="file"
            id="certificado"
            name="certificado"
            onChange={handleCertificadoChange}
          />

          <button type="submit">
            Solicitar Aprovação
          </button>
        </form>
      </main>
    </div>
  );
}

export default SolicitarAprovacaoTecnico;
