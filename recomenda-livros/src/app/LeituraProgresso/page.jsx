'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  TextField,
  Typography
} from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import './layout.css'

const API_URL = process.env.NEXT_PUBLIC_API

export default function LeituraProgressoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [livros, setLivros] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}livros`)
      .then(res => res.json())
      .then(data => {
        setLivros(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error)
        setLoading(false)
      })
  }, [])

  const atualizarPaginasLidas = async (id, novoValor) => {
    try {
      const livro = livros.find(l => l.id === id)
      const paginas = Math.min(Number(novoValor), livro.totalPaginas)
      const porcentagem = Math.round((paginas / livro.totalPaginas) * 100)

      const atualizados = livros.map((l) =>
        l.id === id
          ? { ...l, paginasLidas: paginas, completionPercentage: porcentagem }
          : l
      )
      setLivros(atualizados)

      await fetch(`${API_URL}livros/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paginasLidas: paginas,
          completionPercentage: porcentagem
        })
      })
    } catch (error) {
      console.error('Erro ao atualizar progresso:', error)
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
              const progresso =livro.totalPaginas && livro.totalPaginas > 0
                ? Math.round((Number(livro.paginasLidas) / Number(livro.totalPaginas)) * 100)
                : 0

              console.log('Livro carregado:', livro)


              return (
                <Card key={livro.id} variant="outlined" className="leitura-card">
                  <CardContent>
                    <Typography variant="h6">{livro.title}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Autor: {livro.author}
                    </Typography>

                    <Typography className="leitura-progress-text">
                      Progresso: {progresso}% ({livro.paginasLidas ?? 0} de {livro.totalPaginas ?? 0} páginas)
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
