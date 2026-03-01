# 🌐 Leonardo Belini — Portfolio

Portfolio pessoal desenvolvido com **Astro**, **Tailwind CSS v4** e **TypeScript**.

🔗 **Live:** [lsbelini.dev](https://lsbelini.dev)

---

## ✨ Sobre

Site pessoal e portfolio de **Leonardo Siervo Belini** — Desenvolvedor Full Stack com mais de 10 anos de experiência em diversas tecnologias, desde frontend até backend, mobile e desktop.

### Seções

- **Hero** — Apresentação com foto e introdução
- **Sobre mim** — Resumo profissional e tecnologias principais
- **Carreira** — Timeline com experiências profissionais
- **Educação** — Formação acadêmica
- **Contato** — Informações de contato

---

## 🛠️ Tech Stack

| Categoria        | Tecnologia                                                              |
| :--------------- | :---------------------------------------------------------------------- |
| Framework        | [Astro 5](https://astro.build/)                                         |
| Estilização      | [Tailwind CSS v4](https://tailwindcss.com/)                             |
| Linguagem        | [TypeScript](https://www.typescriptlang.org/)                           |
| Ícones           | [Lucide](https://lucide.dev/)                                           |
| Fonte            | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)        |
| SEO              | Sitemap, Open Graph, JSON-LD, meta tags                                 |
| Linting          | ESLint + Prettier                                                       |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e assets estáticos
├── components/
│   ├── pages/index/     # Componentes de cada seção da página
│   ├── seo/             # SEO Head e JSON-LD
│   └── ui/              # Componentes reutilizáveis (Tag, Divider, Timeline...)
├── data/                # Dados estruturados (carreira, educação, timeline)
├── layouts/             # Layouts base
├── pages/               # Rotas (index.astro)
├── styles/              # CSS global e tema
├── types/               # Tipos TypeScript
└── utils/               # Funções utilitárias
```

---

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lsbelini/portfolio.git
cd portfolio

# Instale as dependências
npm install
```

### Comandos

| Comando              | Ação                                                     |
| :------------------- | :------------------------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento em `localhost:4321`  |
| `npm run build`      | Gera o build de produção em `./dist/`                    |
| `npm run preview`    | Pré-visualiza o build localmente                         |
| `npm run lint`       | Verifica erros de linting                                |
| `npm run lint:fix`   | Corrige erros de linting automaticamente                 |
| `npm run format`     | Formata o código com Prettier                            |

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência ou inspiração.
