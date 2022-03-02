function books(data, index) {
    return `
        <div data-index="${index+1}" class="data-card">
            <h4>${data.sub}</h4>
            <h2>${data.title}</h2>
            <h5>${data.text}</h5>
            <button><span class="details">read more</span><span class="material-icons md-18">arrow_forward</span></button>
        </div>`
}


function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        rootElement.insertAdjacentHTML("beforeend", books(data, i))
    }
}




window.addEventListener("load", loadEvent);