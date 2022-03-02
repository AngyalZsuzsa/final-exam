function books(data, index) {
    return `
        <div data-index="${index+1}" class="data-card">
            <h4>${data.title}</h4>
            <h2>${data.sub}</h2>
            <h5>${data.text}</h5>
            <button><span class="details">details</span><span class="material-icons md-36">arrow_forward</span></button>
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