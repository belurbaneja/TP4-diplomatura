const emociones = { 
    'feliz ': '&#x1F600', 
    'felíz ': '&#x1F600', 
    'enojado ': '&#x1F92C', 
     'mentiroso ':'&#x1F925',
    'loco ':'&#x1F92F',
    'confundido ':'&#x1F615',
    'sorprendido ':'&#x1F632',
    'triste ':'&#x1F62D'
    }
emocionesContinue = 0;
let boxtext = document.getElementsByTagName
    ('textarea')[0];

boxTL = boxtext.value.length;
boxTSS = (a, b) => boxtext.value.substring(a, b);

g = document.getElementsByTagName('button')[0];
const EmojiSuge = (a) => {
    return a.toLowerCase().replace(/[a-zA-Zá-í-é-ó-ú]+ /g, (e) => {

        if ((a.toLowerCase().lastIndexOf(e) != -1) && (Object.keys(emociones).indexOf(e) != -1)) {
            g.innerHTML = emociones[e];
            g.name = e;
        }
        return emociones[e] || e
    })
}
document.getElementsByTagName
    ('textarea')[0].addEventListener("input", (e) => {
     /*    if (emocionesContinue >= boxTL) {
            emocionesContinue = boxTL
        } */
        if ((EmojiSuge(boxTSS(emocionesContinue)) != boxTSS(emocionesContinue)) && g.textContent == '') {

            g.name = emociones[g.innerHTML.charAt()].toLowerCase();
            emocionesContinue = boxTL
        }


    })
const f = () => {
    console.log(boxtext.value.lastIndexOf(g.name),g.name.length)
    boxtext.value = boxTSS(0, boxtext.value.lastIndexOf(g.name)) + boxTSS(boxtext.value.lastIndexOf(g.name),boxtext.value.lastIndexOf(g.name)+g.name.length).toLowerCase().replace(g.name, g.innerHTML + ' ') + boxTSS(boxtext.value.lastIndexOf(g.name)+g.name.length)
    g.innerHTML = ''
    g.name=''

}
const fE = () => {
    document.getElementById('chat').textContent=boxtext.value
}
for(const a of Object.keys(emociones)){
    const li=document.createElement('li');
    li.innerHTML=a+emociones[a];
    document.getElementById('WordsList').appendChild(li)
}
