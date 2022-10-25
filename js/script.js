const containerGrid= document.querySelector('.grid-container-grid') 

const newsCom = []
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-1.png"
})
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-2.png"
})
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-3.png"
})
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-1.png"
})
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-2.png"
})
newsCom.push({
    titulo: "noticia",
    contenido: "relleno",
    image: "../assets/img/post-3.png"
})
for(iten of newsCom){
    const content = document.createElement('article')
    content.classList.add('post-container')
    const imgNews = document.createElement('img')
    imgNews.setAttribute('src', iten.image)
    const tittle = document.createElement('p')
    tittle.innerText = iten.titulo
    const contentInfo = document.createElement('p')
    contentInfo.innerText = iten.contenido
    const urlNews = document.createElement('a')
    urlNews.setAttribute('href', 'url')
    urlNews.innerText = 'leer mas'

    content.append(imgNews, tittle, contentInfo, urlNews)
    containerGrid.appendChild(content)
}