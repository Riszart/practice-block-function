const containerGrid = document.querySelector('.grid-container-grid') 
const imgNewsP = document.querySelector('.img-news-p')
const pContentNews = document.querySelector('.p-content-news')
const titleSubTop = document.querySelector('.title-sub-top')
const blogsButton = document.querySelector('.blogs-button')
const blogsMain = document.querySelector('.blogs-main')
const blogContent2 = document.querySelector('.blog-content-2')
const imgContainer2 = document.querySelector('.img-container-2')



function addFlexInactive(){
    blockAddNews.classList.toggle('inactive')
    gridConteiner.classList.toggle('inactive')
}

const newsCom = []
newsCom.push({
    titulo: "4 dispositivos y tecnologías que se imaginaron en los 60’s y que Samsung los hizo realidad en el siglo XXI",
    abstract: "Hace sesenta años, cuando los programas de televisión aún se transmitían en blanco y negro, muchas series y caricaturas de moda se animaron a imaginar y predecir el futuro.",
    contenido: "Robots Aspiradoras, La mayoría de series de los años sesenta incluía una madre de familia preocupada por la limpieza del hogar. Para facilitar la realización de estas actividades, se contaba con la aspiradora robot, un dispositivo que parecía soñado para las amas de casa de aquella época pero que existía únicamente en la imaginación. Smartwatches, Los relojes inteligentes permitían a los personajes sesenteros contestar llamadas, ver sus programas de TV favoritos y eran capaces de despertar al dueño del reloj con una ruidosa alarma. En la actualidad, los smartwatches, como el Samsung Galaxy Watch5, son parte del ecosistema y puedes ver mensajes y responder llamadas desde ellos. Asimismo, ofrecen un monitoreo diario del estado de salud y ayudan a realizar un seguimiento detallado de la calidad de sueño con la finalidad de contribuir a mejorar tus hábitos. Pantallas Planas, Las familias de los años sesenta, que se reunían para ver sus series y caricaturas frente a un televisor con antena, en blanco y negro, ni imaginaban que los televisores de pantalla plana que veían en televisión existirían en la realidad muchos años después. Videollamadas, La videollamada es quizás la actividad que más imposible de realizar se veía hace sesenta años. Hoy en día, forman parte de la vida diaria, sobre todo durante estos más de dos años de pandemia. Esto se debe a que se convirtió en el medio de comunicación más utilizado, ayudando a mantener a las familias y amigos unidos en la distancia",
    image: "../assets/img/post-1.png",
    id: 1001
})
newsCom.push({
    titulo: "noticia",
    abstract: "resumen",
    contenido: "relleno",
    image: "../assets/img/post-2.png",
    id: 1002
})
newsCom.push({
    titulo: "noticia",
    abstract: "resumen",
    contenido: "relleno",
    image: "../assets/img/post-3.png",
    id: 1003
})
newsCom.push({
    titulo: "noticia",
    abstract: "resumen",
    contenido: "relleno",
    image: "../assets/img/post-1.png",
    id: 1004
})
newsCom.push({
    titulo: "noticia",
    abstract: "resumen",
    contenido: "relleno",
    image: "../assets/img/post-2.png",
    id: 1005
})
newsCom.push({
    titulo: "noticia",
    abstract: "resumen",
    contenido: "relleno",
    image: "../assets/img/post-3.png",
    id: 1006
})
for(iten of newsCom){
    const content = document.createElement('article')
    content.classList.add('post-container')
    content.setAttribute('id', iten.id)
    const imgNews = document.createElement('img')
    imgNews.setAttribute('src', iten.image)
    imgNews.addEventListener('click', wiewNews)
    const tittle = document.createElement('p')
    tittle.innerText = iten.titulo
    const contentInfo = document.createElement('p')
    contentInfo.innerText = iten.abstract
    const urlNews = document.createElement('a')
    urlNews.setAttribute('href', 'url')

    content.append(imgNews, tittle, contentInfo, urlNews)
    containerGrid.appendChild(content)
}
function wiewNews(){
    const postConteiner = document.querySelectorAll('.post-container')
    postConteiner.forEach((element)=>{
    element.addEventListener('click',()=>{
        for(iten of newsCom){
            if(iten.id == element.id){
                imgNewsP.setAttribute('src', iten.image) 
                pContentNews.innerText = iten.abstract
                titleSubTop.innerText = iten.titulo
                blogsButton.setAttribute('id', iten.id)
            }
        }
        })
    })
}

blogsButton.addEventListener('click', structurar)
function structurar(){
    blogsMain.classList.add('unvisibility')
    blogContent2.classList.remove('inactive')
    for(iten of newsCom){
        if(iten.id == blogsButton.id){
            const h1NewsBlogOther = document.querySelector('.h1-news-blog-other')
            const pNewsBlogOther = document.querySelector('.p-news-blog-other')
            h1NewsBlogOther.innerText = iten.contenido
            pNewsBlogOther.innerText = iten.titulo
            imgContainer2.setAttribute('src', iten.image)
        }
    }
}