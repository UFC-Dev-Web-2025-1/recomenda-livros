'use client'

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import { useState } from 'react'

export default function PerfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const perfil = {
    nome: 'Bom Leitor',
    email: 'exemple@gmail.com',
    nascimento: '01/01/2001'
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />
      <Box sx={{ flexGrow: 1 }}>
        <Header
          title="Perfil"
          avatar="A"
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', px: 2 }}>
          <Card sx={{ maxWidth: 500, width: '100%', p: 3, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Perfil
              </Typography>

              <Avatar sx={{ bgcolor: 'orange', width: 64, height: 64, margin: '0 auto' }}>A</Avatar>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Avatar
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Nome:</strong> {perfil.nome}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Email:</strong> {perfil.email}
              </Typography>

              <Typography>
                <strong>Data de Nascimento:</strong> {perfil.nascimento}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 3 }}
                fullWidth
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
