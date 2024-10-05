import LoginSystem from '../../../../backend/routes/login'

export const formLogin = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          {/* Container para a logo e o formulário */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo da empresa */}
            {/* <img
              src='' // Substitua pela URL da sua logo
              alt=""
              style={{ width: '100px', height: '100px', marginRight: '20px' }} // Ajuste o tamanho e a margem conforme necessário
            /> */}
            {/* Formulário de login */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                background: '#f9f9f9'
              }}
            >
              <h2>Login</h2>
              {/* Campo de nome de usuário */}
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px' }}
              />
              {/* Campo de senha */}
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ marginBottom: '20px', padding: '10px', borderRadius: '4px' }}
              />
              {/* Botão de login */}
              <button type="submit" style={{ padding: '10px', background: 'black', color: 'white', cursor: 'pointer' }}>
                Login
              </button>
              {/* Exibe a mensagem de sucesso ou erro */}
              {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
            </form>
          </div>
          <footer style={{ textAlign: 'center', position: 'absolute', bottom: '0', padding: '10px', opacity: '0.2' }}>
            © {new Date().getFullYear()} VINMA. Todos os direitos reservados.
          </footer>
    
    
        </div>
    )    
}