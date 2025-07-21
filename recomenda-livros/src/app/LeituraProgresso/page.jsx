'use client'

import { useState } from 'react'
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

  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      totalPaginas: 200,
      paginasLidas: 18,
    },
    {
      id: 2,
      titulo: 'O Hobbit',
      autor: 'J.R.R. Tolkien',
      totalPaginas: 300,
      paginasLidas: 120,
    }
  ])

  const atualizarPaginasLidas = (id, novoValor) => {
    const atualizados = livros.map((livro) =>
      livro.id === id ? { ...livro, paginasLidas: Number(novoValor) } : livro
    )
    setLivros(atualizados)
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

          {livros.map((livro) => {
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
                  />
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
