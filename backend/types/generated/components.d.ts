import type { Schema, Struct } from '@strapi/strapi';

export interface LivrosAppForumOuPostagens extends Struct.ComponentSchema {
  collectionName: 'components_livros_app_forum_ou_postagens';
  info: {
    displayName: 'Forum ou Postagens';
  };
  attributes: {
    Conteudo: Schema.Attribute.Blocks;
    DatadeCriacao: Schema.Attribute.DateTime;
    Nome: Schema.Attribute.String;
    Publicado: Schema.Attribute.Boolean;
    Tags: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.String;
  };
}

export interface LivrosAppGeneros extends Struct.ComponentSchema {
  collectionName: 'components_livros_app_generos';
  info: {
    displayName: 'Generos';
  };
  attributes: {
    Ativo: Schema.Attribute.Boolean;
    generos: Schema.Attribute.RichText;
    Imagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    quantidades: Schema.Attribute.Integer;
  };
}

export interface LivrosAppLeituraProgresso extends Struct.ComponentSchema {
  collectionName: 'components_livros_app_leitura_progressos';
  info: {
    displayName: 'LeituraProgresso';
  };
  attributes: {
    imagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Leitura: Schema.Attribute.RichText;
    niveldaleitura: Schema.Attribute.Decimal;
    Paginas: Schema.Attribute.Integer;
    ultimaAtualizacao: Schema.Attribute.DateTime;
    Usuario: Schema.Attribute.String;
  };
}

export interface LivrosAppLivros extends Struct.ComponentSchema {
  collectionName: 'components_livros_app_livros';
  info: {
    displayName: 'SelecionarLivro';
  };
  attributes: {
    descricao: Schema.Attribute.RichText;
    imagem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    lancamento: Schema.Attribute.Date;
    Livros: Schema.Attribute.Text;
    quantidade: Schema.Attribute.Integer;
  };
}

export interface LivrosAppUsuarios extends Struct.ComponentSchema {
  collectionName: 'components_livros_app_usuarios';
  info: {
    displayName: 'Usuarios';
  };
  attributes: {
    email: Schema.Attribute.Email;
    quantidade: Schema.Attribute.Integer;
    senha: Schema.Attribute.Password;
    Usuarios: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'livros-app.forum-ou-postagens': LivrosAppForumOuPostagens;
      'livros-app.generos': LivrosAppGeneros;
      'livros-app.leitura-progresso': LivrosAppLeituraProgresso;
      'livros-app.livros': LivrosAppLivros;
      'livros-app.usuarios': LivrosAppUsuarios;
    }
  }
}
