'use client'

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import { useState, useEffect } from 'react'
import './layout.css'

const API_URL = process.env.NEXT_PUBLIC_API

export default function PerfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [perfil, setPerfil] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}usuarios`)
      .then(res => res.json())
      .then(data => {
        setPerfil(data[0])
      })
      .catch(error => {
        console.error('Erro ao carregar perfil:', error)
      })
  }, [])

  if (!perfil) {
    return (
      <Box className="perfil-container">
        <Typography>Carregando perfil...</Typography>
      </Box>
    )
  }

  return (
    <Box className="perfil-container">
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />
      <Box className="perfil-content">
        <Header
          title="Perfil"
          avatar={perfil.nome.charAt(0)}
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box className="perfil-card-wrapper">
          <Card className="perfil-card">
            <CardContent className="perfil-card-content">
              <Typography variant="h6" gutterBottom>
                Perfil
              </Typography>

              <Avatar className="perfil-avatar">{perfil.nome.charAt(0)}</Avatar>
              <Typography variant="body2" color="textSecondary" className="perfil-avatar-label">
                Avatar
              </Typography>

              <Typography className="perfil-info">
                <strong>Nome:</strong> {perfil.nome}
              </Typography>

              <Typography className="perfil-info">
                <strong>Email:</strong> {perfil.email}
              </Typography>

              <Typography className="perfil-info">
                <strong>Data de Nascimento:</strong>{' '}
                {new Date(perfil.nascimento).toLocaleDateString('pt-BR')}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                className="perfil-editar-button"
                href="/ConfiguracoesPerfil"
              >
                Editar Informações
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
