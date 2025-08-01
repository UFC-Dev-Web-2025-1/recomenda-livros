'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Navigation/Slidebar'

interface Livro {
  id: number;
  title: string;
}

interface Post {
  id?: number;
  author: string;
  text: string;
  genre: string;
  book: string;
  date: string;
}

export default function ForumPage() {
  const [input, setInput] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedBook, setSelectedBook] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [livros, setLivros] = useState<Livro[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API+'forum')
      .then(res => res.json())
      .then(data => setPosts(data.reverse()))
      .catch(err => console.error('Erro ao buscar tópicos:', err));
  }, []);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API+'livros')
      .then(res => res.json())
      .then(data => setLivros(data))
      .catch(err => console.error('Erro ao buscar livros:', err));
  }, []);

  const publicar = () => {
    if (!input.trim() || !selectedGenre || !selectedBook) {
      console.log('Dados incompletos. Não publicou.')
      return
    }

    const novoPost: Omit<Post, 'id'> = {
      author: 'Você',
      text: input,
      genre: selectedGenre,
      book: selectedBook,
      date: new Date().toLocaleDateString('pt-BR'),
    }

    fetch(process.env.NEXT_PUBLIC_API+'forum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoPost)
    })
      .then(res => res.json())
      .then(data => {
        setPosts(prev => [data, ...prev])
        setInput('')
        setSelectedGenre('')
        setSelectedBook('')
      })
      .catch(err => console.error('Erro ao publicar tópico:', err));
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isVisible={sidebarOpen} onLinkClick={() => setSidebarOpen(false)} />

      <Box sx={{ flexGrow: 1 }}>
        <Header
          title="Fórum"
          avatar="A"
          config={false}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4, px: 2 }}>
          <Typography variant="h4" gutterBottom>Fórum de Discussões</Typography>

          <Card variant="outlined" sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>Criar novo tópico</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Escreva seu tópico..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Select
                fullWidth
                displayEmpty
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <MenuItem value="" disabled>Gênero</MenuItem>
                <MenuItem value="Ficção">Ficção</MenuItem>
                <MenuItem value="Fantasia">Fantasia</MenuItem>
                <MenuItem value="Biografia">Biografia</MenuItem>
                <MenuItem value="Literatura fantástica">Literatura fantástica</MenuItem>
                <MenuItem value="Ficção distópica">Ficção distópica</MenuItem>
              </Select>

              <Select
                fullWidth
                displayEmpty
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
              >
                <MenuItem value="" disabled>Livro</MenuItem>
                {livros.map((livro) => (
                  <MenuItem key={livro.id} value={livro.title}>{livro.title}</MenuItem>
                ))}
              </Select>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={publicar}
            >
              Publicar
            </Button>
          </Card>

          {/* Lista de tópicos */}
          <Box>
            <Typography variant="h6" gutterBottom>Tópicos Recentes</Typography>
            {posts.length === 0 ? (
              <Typography>Nenhum tópico ainda.</Typography>
            ) : (
              posts.map((post) => (
                <Card key={post.id} variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      Postado por {post.author} · {post.date}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }}>
                      {post.text}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">
                      <strong>Gênero:</strong> {post.genre} · <strong>Livro:</strong> {post.book}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
