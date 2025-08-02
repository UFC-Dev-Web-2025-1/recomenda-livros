'use client'

import { useState, useEffect } from 'react'
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
import { useRouter } from 'next/navigation'
import './layout.css'

export default function RecomendacaoInteligentePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filtroGenero, setFiltroGenero] = useState('')
  const [filtroAutor, setFiltroAutor] = useState('')
  const [paginaAtual, setPaginaAtual] = useState(1)
  const [livros, setLivros] = useState([])
  const livrosPorPagina = 3
  const router = useRouter()

  useEffect(() => {
    const fetchRecomendacoes = async () => {
      try {
        const resRecs = await fetch(`${process.env.NEXT_PUBLIC_API}recomendacoes`)
        const recomendacoes = await resRecs.json()

        const resLivros = await fetch(`${process.env.NEXT_PUBLIC_API}livros`)
        const livrosData = await resLivros.json()

        const livrosMapeados = recomendacoes
          .map((rec) => livrosData.find((livro) => String(livro.id) === String(rec.livroId)))
          .filter(Boolean)

        setLivros(livrosMapeados)
      } catch (error) {
        console.error('Erro ao buscar recomendações:', error)
      }
    }
    fetchRecomendacoes()
  }, [])

  const filtrados = livros.filter((livro) => {
    const matchGenero = filtroGenero ? livro.genre === filtroGenero : true
    const matchAutor = filtroAutor ? livro.author === filtroAutor : true
    return matchGenero && matchAutor
  })

  const autores = [...new Set(livros.filter(l => l?.author).map((l) => l.author))]
  const generos = [...new Set(livros.filter(l => l?.genre).map((l) => l.genre))]

  const indiceInicial = (paginaAtual - 1) * livrosPorPagina
  const livrosPaginados = filtrados.slice(indiceInicial, indiceInicial + livrosPorPagina)
  const totalPaginas = Math.ceil(filtrados.length / livrosPorPagina)

  const adicionarEstante = async (livroId) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API}minha-estante`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ livroId })
      })
      alert('Livro adicionado à estante!')
    } catch (error) {
      alert('Erro ao adicionar livro')
    }
  }

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
              {generos.map((g) => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </Select>
            <Select
              size="small"
              value={filtroAutor}
              onChange={(e) => setFiltroAutor(e.target.value)}
              displayEmpty
              className="filtro-select"
            >
              <MenuItem value="">Filtrar por Autor</MenuItem>
              {autores.map((a) => (
                <MenuItem key={a} value={a}>{a}</MenuItem>
              ))}
            </Select>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {livrosPaginados.map((livro) => (
              <Grid item key={livro.id}>
                <Card className="card-livro">
                  <CardMedia
                    component="img"
                    height="250"
                    image={livro.coverSrc}
                    alt={`Capa do livro ${livro.title}`}
                    className="card-imagem"
                  />
                  <CardContent className="card-conteudo">
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {livro.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Autor: {livro.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gênero: {livro.genre}
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
                      <Button variant="contained" size="small" color="primary" onClick={() => adicionarEstante(livro.id)}>
                        Adicionar à Estante
                      </Button>
                      <Button variant="outlined" size="small" color="primary" onClick={() => router.push(`/DetalhesLivros?id=${livro.id}`)}>
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
