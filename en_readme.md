
# Equilíbrio Natural - Website

[![Languages](https://img.shields.io/github/languages/count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![TopLanguage](https://img.shields.io/github/languages/top/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![Files](https://img.shields.io/github/directory-file-count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![RepoSize](https://img.shields.io/github/repo-size/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![LinesCode](https://img.shields.io/tokei/lines/github/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-Website)
[![MIT License](https://img.shields.io/github/license/FrogDevs/Equilibrio-Natural)](https://choosealicense.com/licenses/mit/)
![Logos](https://i.imgur.com/E5pg9Hj.png)

Website for the company Equilíbrio Natural (Natural Balance). Landing page in SPA (Single Page Application) format with important information about the company, such as contact forms and product availability in the store.

## Screenshot

![App Screenshot](https://i.imgur.com/e1wDuUZ.png)

## Apêndice

Projeto feito pela equipe [FrogDev's](https://github.com/FrogDevs) para o Trabalho de Conclusão de Curso da Etec Jardim Ângela.

## Thanks to

We leave this dedication to the company Equilíbrio Natural (Natural Balance), which trusted in our skills for dissemination, management and automation of its enterprise. And to ETEC Jardim Ângela for providing us the search for the necessary knowledge in the realization of this work.

Assignments:

- [unDraw](https://undraw.co)
- [Desing no Figma](https://www.figma.com/community/file/1183921990401059288)
- [Formsubmit](https://formsubmit.co/)
- [Netlify](https://www.netlify.com/)
- [Unsplash: Primeira imagem](https://unsplash.com/photos/fb7yNPbT0l8)
- [Unsplash: Segunda imagem](https://unsplash.com/photos/1DMNn6gBbwQ)

## Recursos

- ✨ Interactive Cards
- 📧 Emailing
- 🔎 Physical store inquiry
- 🔗 Integration with [App](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
- 🛍️ Product availability

## Tech Stack

**Client:** [Vite](vitejs.dev), [Vue](vuejs.org), [TailwindCSS](tailwindcss.com) and [Vue Router](router.vuejs.org)

**Server:** Node and [Firebase](https://firebase.google.com)

## Lições aprendidas

**What challenges were faced and how were they overcome?**

Integrate the Firestore Database API into the project. The way we found to include real-time data from the database was to install the Firebase/Firestore SDK and use the ``onSnapshot()`` method.

## Optimizations

**What optimizations have been made to the code?**

The **Pnpm** package manager was chosen for the project because it offers *cold and hot caching*. Pnpm is 3x faster and more efficient than Npm and faster than Yarn. Dealing with numerous libraries and modules was an easier and safer task with this tool.

**Vite** is a tool with the utility to take care of the application bundle. It provides better optimization techniques, resulting in higher application performance both in development and production form for the end user.

When building applications with a bundler, the JavaScript package can become quite large, and thus affect page load time. It is more efficient to split the components of each route into separate chunks and only load them when the route is visited. With this in mind, a technique known as *Lazy Load Routes* was used. **Vue Router** offers native support for the technique. [Read more.](https://router.vuejs.org/guide/advanced/lazy-loading.html)

The site was built using the *Mobile First* concept. This concept refers to creating any design that prioritizes the experience on mobile devices, while making adaptations for higher resolutions. This allows the site to be completely responsive and adaptable to other screen resolutions, allowing for greater customer inclusion.

## Demo

We use Netlify for the online implementation of the site

- [Deploy](https://equilibrionatural.netlify.app)
- [Deploy to TCC (alternative database)](https://equilibrionaturaltcc.netlify.app)

## Run locally

***Note: You must have the Pnpm package manager. [See how to install.](https://pnpm.io/installation)*

Clone the project

```bash
  git clone https://github.com/FrogDevs/Equilibrio-Natural-Website.git
```

Go to the project directory

```bash
  cd Equilibrio-Natural-Website
```

Install the dependencies

```bash
  pnpm i
```

Start the server

```bash
  pnpm dev
```

## Used by

This project is used by the following company

- [Equilíbrio Natural](https://equilibrionatural.netlify.app)

## Related

See other related project

- [Equilíbrio Natural - Stock Control](https://github.com/FrogDevs/Inventory-Control)

## Responsible Member

- [@viniciuscosta](https://vinicius-costa-links.vercel.app)

## License

[MIT](LICENSE)<br><br>

<p align="right">“You must have passion for an idea or problem you want to solve. If you don't have enough passion from the beginning, you won't handle the pressure.”</p>
<p align="right">Steve Jobs</p>
