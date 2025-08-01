# 📚 Recomenda Livros

Recomenda Livros é um sistema web desenvolvido com [Next.js](https://nextjs.org/) focado em facilitar a recomendação e descoberta de livros.

O projeto foi criado utilizando o `create-next-app` e faz uso do **App Router**, **Material UI (MUI)**, **TypeScript** e segue boas práticas de UI/UX para proporcionar uma experiência moderna e intuitiva.

-----

## 💻 Arquitetura e API

Este projeto utiliza uma API mockada localmente com **JSON-Server** para simular um backend completo durante o desenvolvimento. Os dados são armazenados no arquivo `db.json` e a API suporta métodos como `GET`, `POST`, `PUT` e `DELETE`.

### Rotas e Endpoints da API

  * **`/posts`**: Gerencia as postagens de resenhas de livros na página inicial.
  * **`/livros`**: Contém dados detalhados sobre os livros, usados na estante, recomendações e páginas de detalhes.
  * **`/usuarios`**: Armazena informações de perfil e autenticação dos usuários.
  * **`/forum`**: Lida com os tópicos de discussão criados pelos usuários no fórum.
  * **`/estatisticas`**: Guarda os dados de leitura e desempenho do usuário para o dashboard.

### Mapeamento Frontend e API

As seguintes rotas do frontend consomem os endpoints da API para carregar e exibir dados:

  * **`/Home-Postagens`**: Busca os dados de postagens do endpoint `/posts`.
  * **`/MinhaEstante`**: Acessa os dados do endpoint `/livros` para exibir a estante do usuário.
  * **`/Recomendacao`**: Filtra e exibe os livros recomendados a partir dos dados em `/livros`.
  * **`/Forum`**: Realiza requisições `GET` para `/forum` e `POST` para publicar novos tópicos.
  * **`/Estatisticas`**: Busca os dados do usuário no endpoint `/estatisticas` para gerar gráficos e relatórios.

-----

## 🚀 Como executar o projeto

Para rodar o projeto localmente, é necessário iniciar o frontend (Next.js) e o backend (JSON-Server). Siga os passos abaixo no terminal:

1.  **Instale as dependências:**

    ```bash
    npm install
    ```

2.  **Inicie o servidor da API (JSON-Server):**
    Abra um novo terminal e execute:

    ```bash
    npm run api-server
    ```

    A API estará disponível em `http://localhost:10000`.

3.  **Inicie o servidor do Next.js:**
    Em outro terminal, execute:

    ```bash
    npm run dev
    ```

Após iniciar, acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para visualizar a aplicação.

-----

## 🌐 Implantação (Deploy)

A arquitetura do projeto foi configurada para ser implantada em duas plataformas:

  * **Vercel**: Hospeda o frontend (aplicação Next.js).
  * **Render**: Hospeda o backend (JSON-Server).

As variáveis de ambiente `NEXT_PUBLIC_API`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` e `NEXTAUTH_SECRET` são configuradas separadamente em cada plataforma para garantir a comunicação segura entre os serviços.
