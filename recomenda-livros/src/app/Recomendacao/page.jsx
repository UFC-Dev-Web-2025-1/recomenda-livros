'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  Grid,
  Rating,
  Chip,
  CardMedia,
  Stack,
  Pagination
} from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'
import StarIcon from '@mui/icons-material/Star'
import './layout.css'

export default function RecomendacaoInteligentePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filtroGenero, setFiltroGenero] = useState('')
  const [filtroAutor, setFiltroAutor] = useState('')
  const [paginaAtual, setPaginaAtual] = useState(1)
  const livrosPorPagina = 3

  const livrosRecomendados = [
    {
      id: 1,
      titulo: 'A Revolução dos Bichos',
      autor: 'George Orwell',
      genero: 'Ficção',
      popularidade: 5,
      sinopse: 'Uma fábula política que critica regimes autoritários.',
      imagem: '/1984.png'
    },
    {
      id: 2,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      genero: 'Fantasia',
      popularidade: 5,
      sinopse: 'Uma jornada épica em um mundo mágico cheio de perigos e heróis.',
      imagem: '/Hoobbit.png'
    },
    {
      id: 3,
      titulo: 'Steve Jobs',
      autor: 'Walter Isaacson',
      genero: 'Biografia',
      popularidade: 4,
      sinopse: 'A história de vida do cofundador da Apple, baseada em entrevistas reais.',
      imagem: '/Clarice.png'
    }
  ]

  const filtrados = livrosRecomendados.filter((livro) => {
    const matchGenero = filtroGenero ? livro.genero === filtroGenero : true
    const matchAutor = filtroAutor ? livro.autor === filtroAutor : true
    return matchGenero && matchAutor
  })

  const indiceInicial = (paginaAtual - 1) * livrosPorPagina
  const livrosPaginados = filtrados.slice(indiceInicial, indiceInicial + livrosPorPagina)
  const totalPaginas = Math.ceil(filtrados.length / livrosPorPagina)

  return (
    <Box className="recomendacao-container">
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />

      <Box className="conteudo-principal">
        <Header
          title="Recomendações"
          avatar="A"
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box className="area-principal">
          <Typography variant="h4" gutterBottom>
            Com base em seu gosto, você pode gostar de...
          </Typography>

          <Box className="filtros">
            <Select
              size="small"
              value={filtroGenero}
              onChange={(e) => setFiltroGenero(e.target.value)}
              displayEmpty
              className="filtro-select"
            >
              <MenuItem value="">Filtrar por Gênero</MenuItem>
              <MenuItem value="Ficção">Ficção</MenuItem>
              <MenuItem value="Fantasia">Fantasia</MenuItem>
              <MenuItem value="Biografia">Biografia</MenuItem>
            </Select>

            <Select
              size="small"
              value={filtroAutor}
              onChange={(e) => setFiltroAutor(e.target.value)}
              displayEmpty
              className="filtro-select"
            >
              <MenuItem value="">Filtrar por Autor</MenuItem>
              <MenuItem value="George Orwell">George Orwell</MenuItem>
              <MenuItem value="J.R.R. Tolkien">J.R.R. Tolkien</MenuItem>
              <MenuItem value="Walter Isaacson">Walter Isaacson</MenuItem>
            </Select>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {livrosPaginados.map((livro) => (
              <Grid item key={livro.id}>
                <Card className="card-livro">
                  <CardMedia
                    component="img"
                    height="250"
                    image={livro.imagem}
                    alt={`Capa do livro ${livro.titulo}`}
                    className="card-imagem"
                  />
                  <CardContent className="card-conteudo">
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {livro.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Autor: {livro.autor}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gênero: {livro.genero}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2">Popularidade:&nbsp;</Typography>
                        <Rating
                          value={livro.popularidade}
                          readOnly
                          size="small"
                          icon={<StarIcon fontSize="inherit" />}
                          emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.3 }} />}
                        />
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Chip label="Recomendado" color="primary" size="small" />
                      </Box>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {livro.sinopse}
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 2, justifyContent: 'center' }}>
                      <Button variant="contained" size="small" color="primary">
                        Adicionar à Estante
                      </Button>
                      <Button variant="outlined" size="small" color="primary">
                        Mais Detalhes
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box className="paginacao">
            <Pagination
              count={totalPaginas}
              page={paginaAtual}
              onChange={(_, value) => setPaginaAtual(value)}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
