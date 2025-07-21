'use client'

import { useState } from 'react'
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

interface Post {
  id: string;
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
  console.log('Posts atuais:', posts)

  const [sidebarOpen, setSidebarOpen] = useState(true)

  const publicar = () => {
  if (!input.trim() || !selectedGenre || !selectedBook) {
    console.log('Dados incompletos. Não publicou.')
    return
  }

  const novoPost: Post = {
    id: Date.now().toString(),
    author: 'Você',
    text: input,
    genre: selectedGenre,
    book: selectedBook,
    date: new Date().toLocaleDateString('pt-BR'),
  }

  console.log('Post criado:', novoPost) 

  setPosts((prevPosts) => [novoPost, ...prevPosts])
  setInput('')
  setSelectedGenre('')
  setSelectedBook('')
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
              </Select>

              <Select
                fullWidth
                displayEmpty
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
              >
                <MenuItem value="" disabled>Livro</MenuItem>
                <MenuItem value="1984">1984</MenuItem>
                <MenuItem value="O Hobbit">O Hobbit</MenuItem>
                <MenuItem value="Dom Casmurro">Dom Casmurro</MenuItem>
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

          {/* Lista de posts */}
            <Box>
              <Typography variant="h6" gutterBottom>Tópicos Recentes</Typography>
              {posts.map((post) => (
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
              ))}
            </Box>
          
        </Box>
      </Box>
    </Box>
  )
}
