'use client';
import Header from '@/src/components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { FaBars, FaEye, FaEyeSlash } from 'react-icons/fa';

const API_URL = process.env.NEXT_PUBLIC_API

const ProfileSettings = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}usuarios/1`)
      .then(res => res.json())
      .then(data => {
        setEmail(data.email);
        setUsername(data.nome);
        setBirthDate(data.nascimento);
        setPassword(data.senha);
      })
      .catch(err => console.error('Erro ao carregar usuário:', err));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const atualizado = {
      nome: username,
      email: email,
      nascimento: birthDate,
      senha: password
    }

    await fetch(`${API_URL}usuarios/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(atualizado)
    });

    alert('Alterações confirmadas!');
  };

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: isSidebarVisible ? '' : '0px',
          transition: 'margin-left 0.3s ease-in-out',
          width: isSidebarVisible ? 'calc(100% - 250px)' : '100%',
        }}
      >
        <Header title="Configurações Perfil" avatar={username.charAt(0)} config={false} onMenuClick={handleMenuToggle} />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '60px' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            maxWidth: '480px',
            width: '100%',
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.25rem', color: '#333' }}>
              Configurações de perfil
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
                <label style={{
                  position: 'absolute', top: '-8px', left: '12px',
                  backgroundColor: 'white', padding: '0 4px',
                  fontSize: '0.75rem', color: '#555', zIndex: 1
                }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '12px',
                    border: '1px solid #ccc', borderRadius: '4px',
                    fontSize: '1rem', boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
                <label style={{
                  position: 'absolute', top: '-8px', left: '12px',
                  backgroundColor: 'white', padding: '0 4px',
                  fontSize: '0.75rem', color: '#555', zIndex: 1
                }}>Nome de usuário</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '12px',
                    border: '1px solid #ccc', borderRadius: '4px',
                    fontSize: '1rem', boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
                <label style={{
                  position: 'absolute', top: '-8px', left: '12px',
                  backgroundColor: 'white', padding: '0 4px',
                  fontSize: '0.75rem', color: '#555', zIndex: 1
                }}>Data de nascimento</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '12px',
                    border: '1px solid #ccc', borderRadius: '4px',
                    fontSize: '1rem', boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '30px', width: '100%' }}>
                <label style={{
                  position: 'absolute', top: '-8px', left: '12px',
                  backgroundColor: 'white', padding: '0 4px',
                  fontSize: '0.75rem', color: '#555', zIndex: 1
                }}>Senha</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '12px 40px 12px 12px',
                    border: '1px solid #ccc', borderRadius: '4px',
                    fontSize: '1rem', boxSizing: 'border-box'
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '12px', top: '50%',
                    transform: 'translateY(-50%)', cursor: 'pointer',
                    color: '#888'
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '14px',
                  fontSize: '1rem', backgroundColor: '#0064d2',
                  color: 'white', border: 'none',
                  borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
              >
                Confirmar alterações
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default ProfileSettings;
