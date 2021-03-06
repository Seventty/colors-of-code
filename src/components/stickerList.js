const elites = [
    { id: 1, name: "Python", description: "", image: "https://i.ibb.co/TWxQnWH/Python-Elite.webp", rate: "Muy probable"},
    { id: 2, name: "NodeJS Shield", description: "", image: "https://i.ibb.co/Y7B0FbC/Node-Elite.webp", rate: "Muy probable"},
    { id: 3, name: "Go Wink", description: "", image: "https://i.ibb.co/hg9m9S5/GoElite.webp", rate: "Muy probable"},
    { id: 4, name: "C# Tokyo Night", description: "", image: "https://i.ibb.co/Zcc6nYG/CElite.webp", rate: "Muy probable"},
    { id: 5, name: "Java Sky Cup", description: "", image: "https://i.ibb.co/Xb5R0tN/Java-Elite.webp", rate: "Muy probable"},
    { id: 6, name: "HTML Junior", description: "", image: "https://i.ibb.co/r2mLj3G/HTMLElite.webp", rate: "Muy probable"},
    { id: 7, name: "CSS Junior", description: "", image: "https://i.ibb.co/bJzfZBx/CSSElite.webp", rate: "Muy probable"},
    { id: 8, name: "JavaScript Junior", description: "", image: "https://i.ibb.co/yqpZKN1/Java-Script-Elite.webp", rate: "Muy probable"},
    { id: 9, name: "Dart Flutter Eggs", description: "", image: "https://i.ibb.co/4TdDg3V/Flutter-Elite.webp", rate: "Muy probable"},
    { id: 10, name: "Vim Piece", description: "", image: "https://i.ibb.co/sPYRhrj/VimElite.webp", rate: "Muy probable"},
    { id: 11, name: "VScode", description: "", image: "https://i.ibb.co/7GtvnZL/VScode-Elite.webp", rate: "Muy probable"},
    { id: 13, name: "Docker Tsunami", description: "", image: "https://i.ibb.co/wMng5xW/Docker-Elite.webp", rate: "Muy probable"},
    { id: 14, name: "FireBase Sparks", description: "", image: "https://i.ibb.co/stmgxqn/Firebase-Elite.webp", rate: "Muy probable"},
    { id: 15, name: "Arch Linux", description: "", image: "https://i.ibb.co/jV0JKZb/Arch-Elite.webp", rate: "Muy probable"},
    { id: 16, name: "Ubuntu", description: "", image: "https://i.ibb.co/frccNFC/Ubuntu-Elite.webp", rate: "Muy probable"},
    { id: 17, name: "Windows", description: "", image: "https://i.ibb.co/6RJGP6t/Windows-Elite.webp", rate: "Muy probable"},
    { id: 12, name: "GitHub Void Egg", description: "", image: "https://i.ibb.co/gMcmWfy/GHElite.webp", rate: "Muy raro"},
];

const epicos = [
    { id: 1, name: "Scaly Python", description: "Agrega un nuevo pigmento a tus lineas de programaci??n.", image: "https://i.ibb.co/rGzpRRz/Python-Epico.webp", rate: "Medianamente probable"},
    { id: 2, name: "Nature NodeJS", description: "Llena tu entorno virtual de variables de entorno.", image: "https://i.ibb.co/2Pcmqj8/Node-Epico.webp", rate: "Medianamente probable"},
    { id: 3, name: "GoFlashng", description: "FAST AS GO!!! Compila a la velocidad del rayo", image: "https://i.ibb.co/gJC57Hh/GoEpico.webp", rate: "Muy raro"},
    { id: 4, name: "CSharp Royal Throne", description: "Conocido como: 'El padre del todo', observa a los otros lenguajes de programaci??n desde su trono.", image: "https://i.ibb.co/mbDwZpB/CEpico.webp", rate: "Muy raro"},
    { id: 5, name: "Java Interestelar", description: "Nacido a partir de la gran explosi??n que expandi?? el cosmos de la programaci??n.", image: "https://i.ibb.co/SsvWkNj/Java-Epico.webp", rate: "Muy probable"},
    { id: 6, name: "Clock Vim", description: "No es m??s que los engranajes de tu propio destino; Tu agregas, tu quitas.", image: "https://i.ibb.co/Tw5VZBC/VimEpico.webp", rate: "Muy probable"},
    { id: 7, name: "VScodex Deluxe", description: "Solo un editor fuera de las dimensiones comprensibles por los mortales.", image: "https://i.ibb.co/M1z7B7f/VScode-Epico.webp", rate: "Medianamente probable"},
    { id: 8, name: "Bonfire FireBase", description: "Adelante, aventurero. Descansa tus dedos en la c??lida fogata de tu propia biblioteca.", image: "https://i.ibb.co/hHCMzJf/Firebase-Epico.webp", rate: "Medianamente probable"},
    { id: 9, name: "Styled Ubuntu", description: "??Listos? ??Acci??n!", image: "https://i.ibb.co/LggM9Vs/Ubuntu-Epico.webp", rate: "Muy probable"},
];

const miticos = [
    { id: 1, name: "Royal HTML", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aqu?? el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "https://i.ibb.co/JC835Lm/HTMLMitico.webp", rate: "Medianamente probable"},
    { id: 2, name: "Royal CSS", description: "El emblema legendario usado por todos los miembros de la realeza que dieron sus vidas por el reino de CSS desde la construcci??n del mismo. Sirviendo como la colorida defensa del reino de la web", image: "https://i.ibb.co/zxMJ64W/CSSMitico.webp", rate: "Medianamente probable"},
    { id: 3, name: "Royal JavaScript", description: "Este emblema pertenece a todos los sabios eruditos que construyeron las bibliotecas ocultas dentro del mismo reino de la web. Categorizados como herejes, terminaron siendo el pilar fundamental de todo lo que vemos hoy d??a.", image: "https://i.ibb.co/SDgQj75/Java-Script-Mitico.webp", rate: "Medianamente probable"},
    { id: 4, name: "Docker Smoothie", description: "Descubierto a partir de las ruinas g??lidas de alg??n templo sumergido en la historia de la programaci??n, se extrajo la escencia de Docker. Un batido que cuenta con todo el poder de la Contenerizaci??n y los diversos sabores que se ocultan tras sus contenedores.", image: "https://i.ibb.co/cD6kH60/Docker-Mitico.webp",  rate: "Muy raro"},
    { id: 5, name: "Horizonte Windows", description: "Donde se reune una masiva cantida de usuarios en busqueda de la promesa de la libertad y evoluci??n.", image: "https://i.ibb.co/F6WC56k/Windows-Mitico.webp", rate: "Muy probable"},
    { id: 6, name: "Flutter Trochilidae", description: "Un ave que se cre??a al borde de la extinci??n por su propio olvido, se hicieron enormes esfuerzos por traerla nuevamente a la vida; Pero no se esperar??a el salto evolutivo que dar??a, logrando sobrevivir en cualquier ambiente.", image: "https://i.ibb.co/DrcmLVw/Flutter-Mitico.webp", rate: "Medianamente probable"},
    { id: 8, name: "Arch Kapollo-DE", description: "Un transbordador lunar contruido a partir de los mejores metales que pudieron ser encontrados al rededor del mundo por la comunidad. Un transbordador de c??digo libre que fue creado a partir del misterioso mecanismo llamado Linux.", image: "https://i.ibb.co/Vj25vz0/Arch-Mitico.webp", rate: "Muy raro"},
    { id: 7, name: "GitHub (The Void)", description: "El vac??o es una entidad que vive bajo un plano dimensional de total vac??o y que cuando aparece en nuestra dimensi??n, trae consigo el total caos y orden. Con su sola presencia, es capaz de llevar a una persona hacia el v??rtice de la locura o sumergirlo en las aguas del entendimiento. En pocas palabras, el vac??o es...  el orden y caos personificados. Por m??s que busques en internet, jam??s encontraras una respuesta clara sobre qu?? es el Vacio, solo sabemos que es capaz de guardar un infinito conocimiento dentro de las infinitas bibliotecas de su universo. ????", image: "https://i.ibb.co/qF0Zb6j/GHMitico.webp", rate: "Muy raro"},
];

const gloriaMitica = [
    {id: 1, name: "Vue ????", description: "Forjado en los manglares m??s profundos de la selva Amaz??nica, alimentado desde los inicios por las ramas que unifica al mundo.", image: "https://i.ibb.co/6rB5KVb/WtaC3H6.png"},
    {id: 2, name: "Angular ????", description: "Forjado bajo el ??gneo e infernal magma del volcan Puhahonu, comprimido hasta ser un mineral casi perfecto.", image: "https://i.ibb.co/6rB5KVb/WtaC3H6.png"},
    {id: 3, name: "React ????", description: "Forjado en el abismo m??s profundo de la fosa de las Marianas, sometido a presiones abismales hasta ser transmutado como diamante por la presi??n de su entorno. Un lugar a donde no llega la luz...", image: "https://i.ibb.co/6rB5KVb/WtaC3H6.png"},
];

const temporada = [
    {id: 1, name: "Pr??ximamente", description: "Llega el verano y sabemos que el calor se apodera de tu c??digo de programaci??n. Pr??ximamente la colecci??n de stickers de verano con un estilo refrescante.", image: "https://i.ibb.co/6rB5KVb/WtaC3H6.png"},
];

export {elites, epicos, miticos, gloriaMitica, temporada};