'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [ status, setStatus ] = useState(false);

  const fundoVemerlho = styles.bg_vermelho;
  const fundoAzul = styles.bg_azul;

  function alterarEstilo() {
    setStatus(!status);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Alterando estilo do elemento</h2>
        <div className={status ? fundoAzul: fundoVemerlho}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}
