/* Desenvolva sua lógica aqui ... */
function eventFilter(){
    const filterButtons = document.querySelectorAll('.but-generos')
    const mainList = document.getElementById('main-list')

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
}

eventFilter()