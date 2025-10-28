export default function renderProductInCard() {
    const divContainer = document.getElementById("products-container")
    const divTeste = document.createElement("div")
console.log(divContainer)
    const h1 = document.createElement("h1")
    h1.innerText = "Testando"

    divTeste.append(h1)
    divContainer.append(divTeste)
}