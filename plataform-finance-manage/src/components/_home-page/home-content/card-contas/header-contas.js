import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from "phosphor-react";

// Supondo que você já tenha um componente Card estruturado assim:
export const HeaderContas = ({ totalGastos, contas }) => {

      return (
        <div style={styles.cardContainer}>
          {/* Exibição do texto com a variável interpolada e estilizada */}
          <p style={styles.text}>
            Você tem um total de&nbsp;
            <span style={styles.valorEmDestaque}>R$ {totalGastos.toFixed(2)}</span>
            &nbsp;para pagar este mês.
          </p>
    
          {/* Seção de Contas a Pagar */}
          <div style={styles.contasContainer}>
            <h4 style={styles.contasTitle}>Contas a Pagar</h4>
            {/* Renderiza a lista de contas */}
            {contas.map((conta, index) => (
              <div key={index} style={styles.contaCard}>
                <div style={styles.contaInfo}>
                  <span style={styles.contaNome}>{conta.nome}</span>
                  <span style={styles.contaVencimento}>Vencimento: {conta.vencimento}</span>
                </div>
                <span style={styles.contaValor}>R$ {conta.valor.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div style={styles.buttonDiv}>
            <button style={styles.buttonStyle}><Plus size={24} /></button>
          </div>
        </div>
      );
    };
    
    // Definindo as propriedades do componente
    HeaderContas.propTypes = {
      totalGastos: PropTypes.number.isRequired, // Espera um número como prop para total de gastos
      contas: PropTypes.arrayOf(
        PropTypes.shape({
          nome: PropTypes.string.isRequired,
          valor: PropTypes.number.isRequired,
          vencimento: PropTypes.string.isRequired,
        })
      ).isRequired,
    };
    
    // Estilos personalizados para o Card e os textos
    const styles = {
      cardContainer: {
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
      },
      text: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '15px',
      },
      valorEmDestaque: {
        fontWeight: 'bold',
        color: '#007AFF',
      },
      contasContainer: {
        marginTop: '20px',
        textAlign: 'left',
      },
      contasTitle: {
        fontSize: '14px',
        color: '#676767',
        marginBottom: '10px',
      },
      contaCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        backgroundColor: '#fff',
        marginBottom: '10px',
        
      },
      contaInfo: {
        display: 'flex',
        flexDirection: 'column',
      },
      contaNome: {
        fontSize: '16px',
        fontWeight: '500',
      },
      contaVencimento: {
        fontSize: '12px',
        color: '#888',
      },
      contaValor: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#007AFF',
      },
      buttonDiv: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'right'
    },


      buttonStyle: {
        width: '50px',
        height: '50px',
        backgroundColor: '#007AFF',
        border: 'none',
        borderRadius: '200px',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer'
      }
    };
    
    