/* Desenvolva sua lógica aqui ... */

function dmShow(){
    const dmButton = document.getElementById('darkMode')
    const dmIcon = document.getElementById('dmIcon')
    const html = document.querySelector('html')

    dmButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        dmIcon.classList.toggle('white-wind')

        const dmPref = localStorage.getItem('darkmode')
        
        if(!dmPref){
            localStorage.setItem('darkmode', true)
        }
        
        if(dmPref){
            localStorage.removeItem('darkmode')
        }

        if(dmIcon.classList.contains('white-wind')){
            dmIcon.src = './assets/img/sun.svg'
        }else{
            dmIcon.src = './assets/img/moon.svg'
        }
    })
}
dmShow()
/*           
        <li class="cards-tela ">
              <img src="../../assets/img/1.jpg" alt="">
              <div class=" flex colum wrap gap padding info-cards">
                <div class="flex gap">
                  <p>Scalene</p>
                  <p>2017</p>
                </div>
                <h3>Magnetite</h3>
              </div>
              <div
              class="flex between padding">
                <p class="price">R$ 70.00</p>
                <button class="but-comprar">Comprar</button>
              </div>
        /li>   
             */

function createCard(lista){
    const liCard = document.createElement('li')
    const imgCard = document.createElement('img')
    const divCard = document.createElement('div')
    const div1Card = document.createElement('div')
    const nomeCard = document.createElement('p')
    const anoCard = document.createElement('p')
    const h3Card = document.createElement('h3')
    const div2Card = document.createElement('div')
    const priceCard = document.createElement('p')
    const bttCard = document.createElement('button')

    liCard.classList.add('cards-tela')
    
    imgCard.src = lista.img

    divCard.classList = 'flex colum wrap gap padding info-cards'

    div1Card.classList = 'flex gap'

    nomeCard.innerHTML = lista.band
    anoCard.innerText = lista.year

    h3Card.classList.add('marg-left')
    h3Card.innerText = lista.title
    

    div2Card.classList = 'flex between padding-sides'

    priceCard.classList.add('price')
    priceCard.innerText = `R$ ${lista.price},00`

    bttCard.classList.add('but-comprar')
    bttCard.innerText = 'Comprar'

    divCard.appendChild(div1Card)
    div1Card.append(nomeCard, anoCard)
    div2Card.append(priceCard, bttCard)
    liCard.append(imgCard, divCard, h3Card, div2Card)

    return liCard
}
render(products)

function render(array) {
    const html = document.querySelector('html')
    const main = document.getElementById("main-list");
  
    const dmPref = localStorage.getItem('darkmode')
  
    if(dmPref) {
      html.classList.add('dark-mode')
    }
  
    array.forEach((movie) => {
      const card = createCard(movie);
      main.appendChild(card);
    });
  }
  

  const slider = document.getElementById('my-range')
  const output = document.getElementById('value')

  output.innerHTML = slider.value;

  slider.oninput = function(){
    output.innerHTML = this.value
  }
/*background: linear-gradient(90deg, var(--color-brand-1), var(--color-white-fixed)) */
  slider.addEventListener('mousemove', () => {
    const x = slider.value;
    const color = 'linear-gradient(90deg,var(--color-brand-1)' + x + '%, var(--color-white-fixed)' + x + '%)';
    slider.style.background = color
  })

 /* function priceFilter(lista){
    const valorItens = document.getElementById('value')
    const mainList = document.getElementById('main-list')
    
    valorItens.addEventListener('keypress', () =>{
      mainList.innerHTML = ''

      const filter = lista.price

      if(valorItens >= filter){
        render(products)
      }
      const filteredProducts = productsFilter(filter)

      render(filteredProducts)
    })
  }


  function filterValue(price){
    const productsValue = products.filter(products => products.price.includes(price))

    return productsValue
  }*/

  function searchPrice(){
    const searchValue = document.getElementById('value')
    const mainList = document.getElementById('main-list')

    searchValue.addEventListener('keypress', () =>{
      mainList.innerHTML = ''

      const priceItem = products.filter(products => products.price.includes(searchValue.value.trim()))
      render(priceItem)

      if(searchValue == 0|| ""){
        render(products)
      }else{
        render(priceItem)
      }
    })
  }
  searchPrice()

  //priceFilter()
  /* 
  searchInput.addEventListener('keypress', () => {
    mainList.innerHTML = ''

    const movieByName = movies.filter(movie => movie.name.toLowerCase().includes(searchInput.value.trim().toLowerCase()))

    render(movieByName)


  filterButtons.forEach(button => {
        button.addEventListener('click', () =>{
            mainList.innerHTML = ''
            const filter = button.innerText
            
            if(filter === 'Todos') {
                render(products)
            }

            const filterredProducts = filterProducts(filter)

            render(filterredProducts)
        })
    })
}

  
  function filterProducts(text) {
    const productsFiltered = products.filter(products => products.category.includes(text))

    return productsFiltered
} */

