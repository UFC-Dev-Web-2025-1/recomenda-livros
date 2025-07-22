'use client'

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import { useState } from 'react'
import './layout.css'

export default function PerfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const perfil = {
    nome: 'Bom Leitor',
    email: 'exemple@gmail.com',
    nascimento: '01/01/2001'
  }

  return (
    <Box className="perfil-container">
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />
      <Box className="perfil-content">
        <Header
          title="Perfil"
          avatar="A"
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box className="perfil-card-wrapper">
          <Card className="perfil-card">
            <CardContent className="perfil-card-content">
              <Typography variant="h6" gutterBottom>
                Perfil
              </Typography>

              <Avatar className="perfil-avatar">A</Avatar>
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
                <strong>Data de Nascimento:</strong> {perfil.nascimento}
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
