
const elites = [
    { id: 1, name: "Python", description: "", image: "https://i.ibb.co/TWxQnWH/Python-Elite.webp"},
    { id: 2, name: "NodeJS Shield", description: "", image: "https://i.ibb.co/Y7B0FbC/Node-Elite.webp"},
    { id: 3, name: "Go Wink", description: "", image: "https://i.ibb.co/hg9m9S5/GoElite.webp"},
    { id: 4, name: "C# Tokyo Night", description: "", image: "https://i.ibb.co/Zcc6nYG/CElite.webp"},
    { id: 5, name: "Java Sky Cup", description: "", image: "https://i.ibb.co/Xb5R0tN/Java-Elite.webp"},
    { id: 6, name: "HTML Junior", description: "", image: "https://i.ibb.co/r2mLj3G/HTMLElite.webp"},
    { id: 7, name: "CSS Junior", description: "", image: "https://i.ibb.co/bJzfZBx/CSSElite.webp"},
    { id: 8, name: "JavaScript Junior", description: "", image: "https://i.ibb.co/yqpZKN1/Java-Script-Elite.webp"},
    { id: 9, name: "Dart Flutter Eggs", description: "", image: "https://i.ibb.co/4TdDg3V/Flutter-Elite.webp"},
    { id: 10, name: "Vim Piece", description: "", image: "https://i.ibb.co/sPYRhrj/VimElite.webp"},
    { id: 11, name: "VScode", description: "", image: "https://i.ibb.co/7GtvnZL/VScode-Elite.webp"},
    { id: 13, name: "Docker Tsunami", description: "", image: "https://i.ibb.co/wMng5xW/Docker-Elite.webp"},
    { id: 14, name: "FireBase Sparks", description: "", image: "https://i.ibb.co/stmgxqn/Firebase-Elite.webp"},
    { id: 15, name: "Arch Linux", description: "", image: "https://i.ibb.co/jV0JKZb/Arch-Elite.webp"},
    { id: 16, name: "Ubuntu", description: "", image: "https://i.ibb.co/frccNFC/Ubuntu-Elite.webp"},
    { id: 17, name: "Windows", description: "", image: "https://i.ibb.co/6RJGP6t/Windows-Elite.webp"},
    { id: 12, name: "GitHub Void Egg", description: "", image: "https://i.ibb.co/gMcmWfy/GHElite.webp"},
    
];

const epicos = [
    { id: 1, name: "Scaly Python", description: "Agrega un nuevo pigmento a tus lineas de programación.", image: "https://i.ibb.co/rGzpRRz/Python-Epico.webp"},
    { id: 2, name: "Nature NodeJS", description: "Llena tu entorno virtual de variables de entorno.", image: "https://i.ibb.co/2Pcmqj8/Node-Epico.webp"},
    { id: 3, name: "GoFlashng", description: "FAST AS GO!!! Compila a la velocidad del rayo", image: "https://i.ibb.co/gJC57Hh/GoEpico.webp"},
    { id: 4, name: "CSharp Royal Throne", description: "Conocido como: 'El padre del todo', observa a los otros lenguajes de programación desde su trono.", image: "https://i.ibb.co/mbDwZpB/CEpico.webp"},
    { id: 5, name: "Java Interestelar", description: "Nacido a partir de la gran explosión que expandió el cosmos de la programación.", image: "https://i.ibb.co/SsvWkNj/Java-Epico.webp"},
    { id: 6, name: "Clock Vim", description: "No es más que los engranajes de tu propio destino; Tu agregas, tu quitas.", image: "https://i.ibb.co/Tw5VZBC/VimEpico.webp"},
    { id: 7, name: "VScodex Deluxe", description: "Solo un editor fuera de las dimensiones comprensibles por los mortales.", image: "https://i.ibb.co/M1z7B7f/VScode-Epico.webp"},
    { id: 8, name: "Bonfire FireBase", description: "Adelante, aventuraro. Descansa tus dedos en la cálida fogata de tu propia biblioteca.", image: "https://i.ibb.co/hHCMzJf/Firebase-Epico.webp"},
    { id: 9, name: "Styled Ubuntu", description: "¿Listos? ¡Acción!", image: "https://i.ibb.co/LggM9Vs/Ubuntu-Epico.webp"},
    
];

const miticos = [
    { id: 1, name: "Royal HTML", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "https://i.ibb.co/JC835Lm/HTMLMitico.webp"},
    { id: 2, name: "Royal CSS", description: "El emblema legendario usado por todos los miembros de la realeza que dieron sus vidas por el reino de CSS desde la construcción del mismo. Sirviendo como la colorida defensa del reino de la web", image: "https://i.ibb.co/zxMJ64W/CSSMitico.webp"},
    { id: 3, name: "Royal JavaScript", description: "Este emblema pertenece a todos los sabios eruditos que construyeron las bibliotecas ocultas dentro del mismo reino de la web. Categorizados como herejes, terminaron siendo el pilar fundamental de todo lo que vemos hoy día.", image: "https://i.ibb.co/SDgQj75/Java-Script-Mitico.webp"},
    { id: 4, name: "Docker Smoothie", description: "Descubierto a partir de las ruinas gélidas de algún templo sumergido en la historia de la programación, se extrajo la escencia de Docker. Un batido que cuenta con todo el poder de la Contenerización y los diversos sabores que se ocultan tras sus contenedores.", image: "https://i.ibb.co/cD6kH60/Docker-Mitico.webp"},
    { id: 5, name: "Horizonte Windows", description: "Donde se reune una masiva cantida de usuarios en busqueda de la promesa de la libertad y evolución.", image: "https://i.ibb.co/F6WC56k/Windows-Mitico.webp"},
    { id: 6, name: "Flutter Trochilidae", description: "Un ave que se creía al borde de la extinción por su propio olvido, se hicieron enormes esfuerzos por traerla nuevamente a la vida; Pero no se esperaría el salto evolutivo que daría, logrando sobrevivir en cualquier ambiente.", image: "https://i.ibb.co/DrcmLVw/Flutter-Mitico.webp"},
    { id: 8, name: "Arch Kapollo-DE", description: "Un transbordador lunar contruido a partir de los mejores metales que pudieron ser encontrados al rededor del mundo por la comunidad. Un transbordador de código libre que fue creado a partir del misterioso mecanismo llamado Linux.", image: "https://i.ibb.co/Vj25vz0/Arch-Mitico.webp"},
    { id: 7, name: "GitHub (The Void)", description: "El vacío es una entidad que vive bajo un plano dimensional de total vacío y que cuando aparece en nuestra dimensión, trae consigo el total caos y orden. Con su sola presencia, es capaz de llevar a una persona hacia el vórtice de la locura o sumergirlo en las aguas del entendimiento. En pocas palabras, el vacío es...  el orden y caos personificados. Por más que busques en internet, jamás encontraras una respuesta clara sobre qué es el Vacio, solo sabemos que es capaz de guardar un infinito conocimiento dentro de las infinitas bibliotecas de su universo. 🌙", image: "https://i.ibb.co/qF0Zb6j/GHMitico.webp"},

];

const gloriaMitica = [
    {id: 1, name: "Vue 🍃", description: "Forjado en los manglares más profundos de la selva Amazónica, alimentado desde los inicios por las ramas que unifica al mundo.", image: "https://i.ibb.co/4pZgLbR/download.jpg"},
    {id: 2, name: "Angular 🔥", description: "Forjado bajo el ígneo e infernal magma del volcan Puhahonu, comprimido hasta ser un mineral casi perfecto.", image: "https://i.ibb.co/4pZgLbR/download.jpg"},
    {id: 3, name: "React 🌊", description: "Forjado en el abismo más profundo de la fosa de las Marianas, sometido a presiones abismales hasta ser transmutado como diamante por la presión de su entorno. Un lugar a donde no llega la luz...", image: "https://i.ibb.co/4pZgLbR/download.jpg"},
];

const temporada = [
    {id: 1, name: "Próximamente", description: "Llega el verano y sabemos que el calor se apodera de tu código de programación. Próximamente la colección de stickers de verano con un estilo refrescante.", image: "https://imgur.com/WtaC3H6.png"},

];

export {elites, epicos, miticos, gloriaMitica, temporada};