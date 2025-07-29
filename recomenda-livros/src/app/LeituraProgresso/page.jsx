'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  TextField,
  Typography
} from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import './layout.css'

export default function LeituraProgressoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [livros, setLivros] = useState([])
  const [loading, setLoading] = useState(true)

  // Buscar livros do Strapi
  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/livros', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
        })
        const data = await response.json()
        setLivros(data.data.map(item => ({
          id: item.id,
          titulo: item.attributes.titulo,
          autor: item.attributes.autor,
          totalPaginas: item.attributes.totalPaginas,
          paginasLidas: item.attributes.paginasLidas
        })))
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar livros:', error)
        setLoading(false)
      }
    }

    fetchLivros()
  }, [])

  // Atualizar páginas lidas no Strapi
  const atualizarPaginasLidas = async (id, novoValor) => {
    try {
      // Atualiza localmente primeiro para resposta mais rápida
      const atualizados = livros.map((livro) =>
        livro.id === id ? { ...livro, paginasLidas: Number(novoValor) } : livro
      )
      setLivros(atualizados)

      // Envia a atualização para o Strapi
      await fetch(`http://localhost:1337/api/livros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          data: {
            paginasLidas: Number(novoValor)
          }
        })
      })
    } catch (error) {
      console.error('Erro ao atualizar páginas lidas:', error)
      // Poderia adicionar um feedback de erro aqui
    }
  }

  if (loading) {
    return (
      <Box className="leitura-container">
        <Typography>Carregando...</Typography>
      </Box>
    )
  }

  return (
    <Box className="leitura-container">
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />

      <Box className="leitura-content">
        <Header
          title="Leitura em Progresso"
          avatar="A"
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box className="leitura-main">
          <Typography variant="h4" gutterBottom>Livros em Andamento</Typography>

          {livros.length === 0 ? (
            <Typography>Nenhum livro em andamento encontrado.</Typography>
          ) : (
            livros.map((livro) => {
              const progresso = (livro.paginasLidas / livro.totalPaginas) * 100

              return (
                <Card key={livro.id} variant="outlined" className="leitura-card">
                  <CardContent>
                    <Typography variant="h6">{livro.titulo}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Autor: {livro.autor}
                    </Typography>

                    <Typography className="leitura-progress-text">
                      Progresso: {Math.round(progresso)}% ({livro.paginasLidas} de {livro.totalPaginas} páginas)
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progresso}
                      className="leitura-progress-bar"
                    />

                    <TextField
                      label="Páginas lidas"
                      type="number"
                      size="small"
                      value={livro.paginasLidas}
                      onChange={(e) => atualizarPaginasLidas(livro.id, e.target.value)}
                      inputProps={{
                        min: 0,
                        max: livro.totalPaginas
                      }}
                    />
                  </CardContent>
                </Card>
              )
            })
          )}
        </Box>
      </Box>
    </Box>
  )
}