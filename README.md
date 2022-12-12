[![Languages](https://img.shields.io/github/languages/count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![TopLanguage](https://img.shields.io/github/languages/top/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![Files](https://img.shields.io/github/directory-file-count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![RepoSize](https://img.shields.io/github/repo-size/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![LinesCode](https://img.shields.io/tokei/lines/github/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![MIT License](https://img.shields.io/github/license/FrogDevs/Equilibrio-Natural)](https://choosealicense.com/licenses/mit/)
![Logos](https://i.imgur.com/E5pg9Hj.png)


# Equilíbrio Natural Website

Site de divulgação para a empresa Equilíbrio Natural. Landing page em formato SPA (Single Page Application) com informações importantes sobre a empresa, como, formas de contato e disponibilidade de produtos em loja.


## Captura de tela

![App Screenshot](https://i.imgur.com/e1wDuUZ.png)


## Apêndice

Projeto feito pela equipe [FrogDev's](https://github.com/FrogDevs) para o Trabalho de Conclusão de Curso da Etec Jardim Ângela.


## Agradecimentos

Deixamos essa dedicatória a empresa Equilíbrio Natural que confiaram em nossas habilidades para a divulgação, gestão e automação de seu empreendimento. Ao professor orientador Denílson por cooperar com a equipe no processo. E por fim, a ETEC Jardim Ângela por nos proporcionar a busca pelo conhecimento necessário na realização desse trabalho.
 
- [unDraw](https://undraw.co)
- [Desing no Figma](https://www.figma.com/community/file/1183921990401059288)
- [Unsplash: Primeira imagem](https://unsplash.com/photos/fb7yNPbT0l8)
- [Unsplash: Segunda imagem](https://unsplash.com/photos/1DMNn6gBbwQ)
- [Formsubmit](https://formsubmit.co/)
- [Netlify](https://www.netlify.com/)
 

## Tech Stack

**Client:** Vite, Vue, Vue Router e TailwindCSS

**Server:** Node e Firebase


## Recursos

- ✨ Cards interativos
- 📧 Envio de e-mail
- 🔎 Consulta de lojas físicas
- 🛍️ Disponibilidade de produtos

<!-- - Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform -->


## Lições aprendidas

**Quais desafios foram enfrentados e como foram sobressaídos?**

Integrar a API Firestore Database no projeto. A maneira encontrada de incluir os dados em tempo real da database, foi instalando o SDK do Firebase/Firestore e usando o método ```onSnapshot()```.


## Otimizações


**Que otimizações foram feitas no código?**

O gerenciador de pacótes **Pnpm** foi escolhido para o projeto por oferecer *cold e hot cache*. Pnpm é 3x mais rápido e eficiente do que o Npm e mais rápido do que o Yarn. Lidar com inúmeras biblíotecas e módulos foi uma tarefa mais fácil e segura com essa ferramenta.

**Vite** é uma ferramenta com a utilidade de cuidar do bundle da aplicação. Fornece melhores técnicas de performance e otmizações, resultando em um maior desempenho na aplicação tanto em forma de desenvolvimento quanto de produção para o usuário final.

Ao construir aplicações com um bundler, o pacote JavaScript pode tornar-se bastante grande, e assim afetar o tempo de carregamento da página. É mais eficiente dividir os componentes de cada rota em pedaços separados, e só os carregarmos quando a rota for visitada. Tendo em vista isso, foi usado uma técnica conhecida como *Lazy Load Routes*. **Vue Router** oferece suporte nativo a técnica. [Leia mais.](https://router.vuejs.org/guide/advanced/lazy-loading.html)

O site foi construido usando o conceito de *Mobile First*. Esse conceito se refere a criação qualquer projeto web que prioriza a experiência em dispositivos móveis, enquanto são feitas adaptações para o desktop e outras plataformas. Isso permite que o site seja completamente responsivo e adaptável a outras resoluções de telas, permitindo uma maior inclusão de clientes.


## Demo

- [Deploy](https://equilibrionatural.netlify.app)
- [Deploy para o TCC (banco de dados alternativo)](https://equilibrionaturaltcc.netlify.app)


## Rodar localmente

***Nota**: É necessário pussuir o gerenciador de pacotes Pnpm. [Veja como instalar.](https://pnpm.io/installation)*

Clone o projeto

```bash
  git clone https://github.com/FrogDevs/Equilibrio-Natural-Website.git
```

Vá ao diretório do projeto

```bash
  cd Equilibrio-Natural 
```

Instale as depêndencias

```bash
  pnpm i
```

Inicie o servidor

```bash
  pnpm dev
```

## Relacionados

Veja outro projeto relacionado

[Equilíbrio Natural - Controle de Estoque](https://github.com/FrogDevs/Inventory-Control)


## Usado por

Este projeto é usado pela seguinte companhia

- [Equilíbrio Natural](https://equilibrionatural.netlify.app)


## Membro responsável

- [@viniciuscosta](https://github.com/Jolonte)

## Licença

[MIT](LICENSE)
