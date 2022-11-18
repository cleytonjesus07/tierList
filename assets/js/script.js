const imagesContainer = document.getElementsByClassName("images-container")[0]
const basePath = './assets/images/characters/'
const characters = [
    {
        name:'Ashe',
        src: `${basePath}ashe.jpg`
    },
    {
        name:'Baptiste',
        src: `${basePath}baptiste.jfif`
    },
    {
        name:'Brigitte',
        src: `${basePath}brigitte.jpg`
    },
    {
        name:'Cassidy',
        src: `${basePath}cassidy.jfif`
    },
    {
        name:'Dva',
        src: `${basePath}dva.png`
    },
    {
        name:'Genji',
        src: `${basePath}genji.jpg`
    },
    {
        name:'Hanzo',
        src: `${basePath}hanzo.jpg`
    },
    {
        name:'Junkrat',
        src: `${basePath}junkrat.png`
    },
    {
        name:'Kiriko',
        src: `${basePath}kiriko.jfif`
    },
    {
        name:'Lucio',
        src: `${basePath}lucio.jpg`
    },
    {
        name:'Mei',
        src: `${basePath}mei.jfif`
    },
    {
        name:'Moira',
        src: `${basePath}moira.png`
    },
    {
        name:'Orisa',
        src: `${basePath}orisa.jfif`
    },
    {
        name:'Pharah',
        src: `${basePath}pharah.jpg`
    },
    {
        name:'Rainha Junker',
        src: `${basePath}rainha junker.jpg`
    },
    {
        name:'Reaper',
        src: `${basePath}reaper.jpg`
    },
    {
        name:'Roadhog',
        src: `${basePath}roadhog.jfif`
    },
    {
        name:'Sojourn',
        src: `${basePath}sojourn.jpg`
    },
    {
        name:'Soldier',
        src: `${basePath}soldier.jfif`
    },
    {
        name:'Windowmaker',
        src: `${basePath}windowmaker.jfif`
    }
]

characters.forEach(character=>{

    imagesContainer.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="images" title="${character.name}">
            <img src="${character.src}" />
        </div>
        `
        )
})




const draggableDivs = document.querySelectorAll(".draggable");
const images = document.querySelectorAll('.images');

let dragItem = null;

imagesContainer.addEventListener('dragover', dragOver);
imagesContainer.addEventListener('dragenter', dragEnter);
imagesContainer.addEventListener('dragleave', dragLeave);
imagesContainer.addEventListener('drop', dragDrop);

draggableDivs.forEach(div => {
    div.addEventListener('dragover', dragOver);
    div.addEventListener('dragenter', dragEnter);
    div.addEventListener('dragleave', dragLeave);
    div.addEventListener('drop', dragDrop);
})

function dragOver(e) {
    e.preventDefault();
    console.log("dragover")
}
function dragEnter() {
    console.log("dragenter")
    this.append(dragItem);
}
function dragLeave() {
    console.log("dragleave")
}
function dragDrop() {
    console.log("dragdrop")
    console.log(dragItem)
    this.append(dragItem);
}


images.forEach(img => {
    img.setAttribute("draggable", true);
    img.addEventListener("dragstart", function (e) {
        dragItem = this;
        this.style.opacity = .5;
        console.log('dragstart')
    })
    img.addEventListener('dragend', (e) => {
        console.log('dragend');
        dragItem.style.opacity = 1;
        dragItem = null;
    })
})