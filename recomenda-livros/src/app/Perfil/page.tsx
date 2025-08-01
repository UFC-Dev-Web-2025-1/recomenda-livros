'use client'

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import { useState, useEffect } from 'react'
import './layout.css'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function PerfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [perfil, setPerfil] = useState<{
    nome: string,
    email: string,
    nascimento: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const res = await fetch(`${API_URL}/usuarios`)
        if (!res.ok) throw new Error(`Erro ${res.status}`)
        const data = await res.json()
        setPerfil(data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Erro desconhecido')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchPerfil()
  }, [])



  return (
    <Box className="perfil-container">
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />
      <Box className="perfil-content">
        <Header
          title="Perfil"
          avatar={perfil ? perfil.nome.charAt(0) : ''}
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box className="perfil-card-wrapper">
          <Card className="perfil-card">
            <CardContent className="perfil-card-content">
              <Typography variant="h6" gutterBottom>
                Perfil
              </Typography>

              <Avatar className="perfil-avatar">{perfil ? perfil.nome.charAt(0) : ''}</Avatar>
              <Typography variant="body2" color="textSecondary" className="perfil-avatar-label">
                Avatar
              </Typography>

              <Typography className="perfil-info">
                <strong>Nome:</strong> {perfil ? perfil.nome : ''}
              </Typography>

              <Typography className="perfil-info">
                <strong>Email:</strong> {perfil ? perfil.email : ''}
              </Typography>

              <Typography className="perfil-info">
                <strong>Data de Nascimento:</strong>{' '}
                {perfil ? new Date(perfil.nascimento).toLocaleDateString('pt-BR') : ''}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                className="perfil-editar-button"
                href="/ConfiguracoesPerfil"
                disabled={!perfil}
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
