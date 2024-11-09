let players = ["", ""];
let currentPlayer = 0;
let board = Array(9).fill(null);
let score = [0, 0];  // Puntajes de los jugadores
let questions = [
    { question: "Según el art. 5 del TUO de la Ley 30225 existen supuestos excluidos de supervisión del OSCE, ¿cuál es uno de ellos?", 
    options: ["Los convenios entre entidades que ofrecen bienes o servicios dentro de sus funciones y con carácter comercial", 
    "Contrataciones de hasta 8 UIT que incluyan bienes y servicios del Catálogo Electrónico de Acuerdo Marco", 
    "Cuando existe un solo proveedor para la contratación de servicios públicos", 
    "Ninguna de las anteriores"], 
    answer: "Cuando existe un solo proveedor para la contratación de servicios públicos" },

    { question: "¿En qué fase de contratación se hace el otorgamiento de la Buena Pro?", 
    options: ["Procedimientos de selección", 
    "Ejecución contractual", 
    "Actos preparatorios", 
    "Todas las anteriores"], 
    answer: "Procedimientos de selección" },

    { question: " En el caso de que el titular de la institución o el funcionario delegado solicite el certificado SEACE, ¿a qué tipo de usuario nos estamos refiriendo?", 
    options: ["Para Órganos que ejercen Control, Fiscalización y Seguimiento", 
    "Para Árbitros y otros usuarios autorizados", 
    "Para proveedores exceptuados - tipo Entidad Pública", 
    "Ninguna de las anteriores"], 
    answer: "Para proveedores exceptuados - tipo Entidad Pública" },

    { question: "¿Quién es el encargado de sancionar administrativamente en el RNP a proveedores, postores o contratistas?", 
    options: ["Órgano de Control Institucional", 
    "Tribunal de Contrataciones del Estado", 
    "Organismo Supervisor de las Contrataciones del Estado", 
    "Ninguna de las anteriores"], 
    answer: "Tribunal de Contrataciones del Estado" },

    { question: "Cuando se recibe el Certificado SEACE, ¿cuál es una de las características o criterios a considerar con respecto a la contraseña?", 
    options: 
    ["La contraseña debe ser cambiada cada 3 meses", 
    "Es de carácter personal y puede ser transferible", 
    "El funcionario, usuario y solicitante asumen la responsabilidad en caso se detecten defectos, omisiones o fraude", 
    "Ninguna de las anteriores"], 
    answer: "El funcionario, usuario y solicitante asumen la responsabilidad en caso se detecten defectos, omisiones o fraude" },

    { question: "¿Cuál es la principal función del OSCE?", 
    options: 
    ["Administrar los recursos financieros del Estado", 
    "Regular y supervisar las contrataciones públicas, garantizando transparencia y eficiencia", 
    "Asesorar a las empresas sobre estrategias de marketing", 
    "Todas las anteriores"], 
    answer: "Regular y supervisar las contrataciones públicas, garantizando transparencia y eficiencia" },

    { question: "¿Qué ocurre si una entidad pública no sigue los procedimientos establecidos en la normativa de contrataciones?", 
    options: 
    ["La entidad no podrá realizar más contrataciones por el resto del año", 
    "El OSCE puede sancionarla, anulando el proceso o imponiendo medidas correctivas", 
    "Solo se le solicita una disculpa pública", 
    "Ninguna de la anteriores"], 
    answer: "1 El OSCE puede sancionarla, anulando el proceso o imponiendo medidas correctivas" },

    { question: "¿Qué requisitos debe cumplir una empresa para inscribirse en el Registro Nacional de Proveedores (RNP)?", 
    options: 
    ["Solo para nacionales y extranjeros domiciliados: verifica que tu RUC se encuentre activo y habido", 
    "Tener un contrato vigente con alguna entidad pública", 
    "Ser una microempresa o pequeña empresa registrada en el Ministerio de Trabajo", 
    "Haber ejecutado al menos un contrato con una entidad pública"], 
    answer: "Solo para nacionales y extranjeros domiciliados: verifica que tu RUC se encuentre activo y habido" },

    { question: "¿Cuál es el objetivo principal del SEACE?", 
    options: 
    ["Facilitar la transparencia y eficiencia en las contrataciones estatales", 
    "Centralizar las cuentas públicas", 
    "Administrar los impuestos estatales", 
    "Proporcionar fondos a entidades privadas"], 
    answer: "Facilitar la transparencia y eficiencia en las contrataciones estatales" },

    { question: "¿Qué tipo de información se registra en el SEACE?", 
    options: 
    ["Documentos privados de empresas", 
    "Datos financieros de ciudadanos", 
    "Documentos de actos preparatorios, selección y ejecución contractual", 
    "Información confidencial de proveedores"], 
    answer: "Documentos de actos preparatorios, selección y ejecución contractual" },

    { question: "¿Cuáles son los principios rectores del SEACE?", 
    options: 
    ["Confidencialidad y restricción", 
    "Transparencia y publicidad", 
    "Centralización de información", 
    "Privacidad de procesos"], 
    answer: "Transparencia y publicidad" },

    { question: "¿Para qué sirve la publicidad de convocatorias en el SEACE?", 
    options: 
    ["Permitir a proveedores y ciudadanos monitorear procesos de contratación", 
    "Contratar directamente", 
    "Gestionar pagos de proveedores", 
    "Centralizar el control de cuentas"], 
    answer: "Permitir a proveedores y ciudadanos monitorear procesos de contratación" },

    { question: "¿Cuál es la visión del OSCE?", 
    options: 
    ["1Mejorar la calidad de vida de los ciudadanos a través de políticas públicas", 
    "Promover la transparencia en las contrataciones públicas", 
    "1Impulsar el crecimiento económico y mejorar la calidad de vida de los peruanos", 
    "Supervisar el cumplimiento de las normativas en contrataciones"], 
    answer: "Impulsar el crecimiento económico y mejorar la calidad de vida de los peruanos" },

    { question: "¿Qué es un laudo arbitral?", 
    options: 
    [" Es una oferta preliminar en una licitación", 
    "Documento de finalización de un proceso de contratación pública", 
    "Es la decisión final emitida por un árbitro en un procedimiento de arbitraje", 
    "Es una apelación del proveedor ante el Estado"], 
    answer: "Es la decisión final emitida por un árbitro en un procedimiento de arbitraje" },

    { question: "¿Qué entidad administra el SEACE?", 
    options: 
    ["Ministerio de Economía y Finanzas", 
    "Contraloría General de la República", 
    "Ministerio de Justicia", 
    "OSCE (Organismo Supervisor de las Contrataciones del Estado)"], 
    answer: "OSCE (Organismo Supervisor de las Contrataciones del Estado)" },

    { question: "¿Qué se requiere para ser consultor de obras en el RNP?", 
    options: 
    ["Tener una profesión específica como arquitectura o ingeniería civil", 
    "Haber trabajado en el sector público", 
    "Ser proveedor internacional", 
    "Presentar un proyecto aprobado previamente"], 
    answer: "Tener una profesión específica como arquitectura o ingeniería civil" },

    { question: "¿Cuál es el propósito del principio de confiabilidad del OSCE?", 
    options: 
    ["Asegurar la disponibilidad de proveedores confiables", 
    "Garantizar integridad, honestidad, imparcialidad y veracidad en la gestión de contrataciones públicas", 
    "Promover la eficiencia en la gestión pública", 
    "Auditar los contratos de grandes licitaciones"], 
    answer: "Garantizar integridad, honestidad, imparcialidad y veracidad en la gestión de contrataciones públicas" },

    { question: "¿Qué hace el OSCE ante denuncias de irregularidades en contrataciones?", 
    options: 
    ["Investiga y puede detener procedimientos para corregir irregularidades", 
    "Archiva la denuncia sin respuesta", 
    "Elimina al proveedor denunciado del registro", 
    "Suspende todos los procesos de contratación"], 
    answer: "Investiga y puede detener procedimientos para corregir irregularidades" },

    { question: "¿Qué significa la supervisión selectiva del OSCE?", 
    options: 
    ["Supervisar todas las licitaciones públicas", 
    "Realizar supervisiones específicas en contrataciones para verificar el cumplimiento normativo", 
    "Controlar únicamente las contrataciones de mayor valor", 
    "Auditar exclusivamente a proveedores extranjeros"], 
    answer: "Realizar supervisiones específicas en contrataciones para verificar el cumplimiento normativo" },

    { question: "¿Qué es el Certificado SEACE?", 
    options: 
    ["Un documento impreso de identificación", 
    "Un sistema de pago electrónico para proveedores", 
    "Un mecanismo de identificación y seguridad para el acceso al SEACE", 
    "Un contrato de servicios públicos"], 
    answer: "Un mecanismo de identificación y seguridad para el acceso al SEACE" },

    { question: "¿Quiénes pueden solicitar el Certificado SEACE?", 
    options: 
    ["Solo entidades públicas", 
    "Proveedores, entidades públicas y otros usuarios autorizados", 
    "Ciudadanos interesados", 
    "Empleados privados"], 
    answer: "Proveedores, entidades públicas y otros usuarios autorizados" },

    { question: "¿Cómo se solicita el Certificado SEACE?", 
    options: 
    ["Por llamada telefónica", 
    "Mediante una solicitud física en el OSCE", 
    "A través de un formulario en la página web del OSCE", 
    "En una oficina de la Contraloría"], 
    answer: "A través de un formulario en la página web del OSCE" },

    { question: "¿Cuál es el tiempo de espera para obtener el Certificado SEACE?", 
    options: 
    ["7 días hábiles", 
    "5 días hábiles", 
    "3 días hábiles", 
    "1 día hábi"], 
    answer: "3 días hábiles" },

    { question: "¿Qué ocurre si la solicitud del Certificado SEACE es observada?", 
    options:
     ["Se envía una notificación al solicitante para corregirla", 
    "Se rechaza automáticamente", 
    "El certificado se aprueba con condiciones", 
    "El proceso se cancela"], 
    answer: "Se envía una notificación al solicitante para corregirla" },

    { question: "¿Cómo se entrega el Certificado SEACE?", 
    options: 
    [" Personalmente en las oficinas del OSCE", 
    "Por correo postal", 
    "En la oficina de Contraloría", 
    "Electrónicamente al correo del usuario registrado"], 
    answer: "Electrónicamente al correo del usuario registrado" },

    { question: "¿Qué debe hacer el usuario después de recibir el Certificado SEACE?", 
    options: 
    ["Activarlo en una oficina del OSCE", 
    "Cambiar la contraseña inicial", 
    "Compartirlo con otros usuarios", 
    "Imprimirlo y guardarl"], 
    answer: "Cambiar la contraseña inicial" },

    { question: "¿Qué se debe hacer en caso de olvidar la contraseña del Certificado SEACE?", 
    options: 
    ["Solicitar un nuevo certificado", 
    "Comunicarse con el soporte técnico del SEACE", 
    "Generar una nueva usando la opción “¿Olvidó su contraseña", 
    "Esperar 24 horas para intentarlo nuevamente"], 
    answer: "Generar una nueva usando la opción “¿Olvidó su contraseña" },

    { question: "¿Cuáles son los pasos generales para obtener el Certificado SEACE?", 
    options: 
    ["Llenar el formulario y enviarlo al Ministerio de Economía", 
    "Llenar un formato y enviarlo por correo posta", 
    "Presentar una solicitud en persona", 
    "Completar el formulario y enviarlo por la Mesa de Partes Virtual del OSCE"], 
    answer: "Completar el formulario y enviarlo por la Mesa de Partes Virtual del OSCE" },

    { question: " ¿Qué documentos adicionales pueden requerirse al solicitar el Certificado SEACE?", 
    options: 
    [" Datos del usuario operador y datos de la entidad contratante", 
    "Datos personales del proveedor únicamente", 
    "Datos de la Contraloría General", 
    "Datos bancarios del solicitante"], 
    answer: "Datos del usuario operador y datos de la entidad contratante" },

    { question: "¿Qué es el Formato B en el proceso del Certificado SEACE?", 
    options: 
    ["Un formulario para proveedores", 
    "Un formulario para entidades públicas contratantes", 
    "Un formato de solicitud de pago", 
    "Un formulario para ciudadanos interesados"], 
    answer: "Un formulario para entidades públicas contratantes" },

    { question: "¿Qué es el Anexo 3 en el proceso de solicitud del Certificado SEACE?", 
    options: 
    ["Un formato para ciudadanos interesados en licitaciones", 
    "Un documento para el consentimiento de datos personales", 
    "Un contrato con la entidad pública", 
    "Una credencial de acceso al SEACE"], 
    answer: "Un documento para el consentimiento de datos personales" },

    { question: "¿Qué es el arbitraje en contrataciones públicas?", 
    options: 
    ["Proceso judicial contra proveedores", 
    "Técnica para revisar contratos", 
    "Método para resolver disputas en contrataciones sin pasar por juicio", 
    "Procedimiento de auditoría interna"], 
    answer: "Método para resolver disputas en contrataciones sin pasar por juicio" },

    { question: "¿Qué son los actos preparatorios en el SEACE?", 
    options: ["Revisión de todos los contratos anteriores", 
    "Actividades que definen el objeto de contratación y presupuesto", 
    "Documentos de auditoría de proveedores", 
    "Procesos de pago a contratistas"], 
    answer: "Actividades que definen el objeto de contratación y presupuesto" },

    { question: "¿Cuál es la misión del OSCE?", 
    options: 
    ["Promover contrataciones públicas integrales y seguras", 
    "Regular el presupuesto público", 
    "Promover contrataciones públicas íntegras, eficientes y competitivas", 
    "Facilitar compras públicas directas"], 
    answer: "Promover contrataciones públicas íntegras, eficientes y competitivas" },

    { question: "¿Qué es la contratación directa?", 
    options: 
    ["Un método de selección para emergencias", 
    "Un contrato donde participan varias empresas", 
    "Un proceso exclusivo para empresas privadas", 
    "Un proceso de selección sin licitación en casos excepcionales"], 
    answer: "Un proceso de selección sin licitación en casos excepcionales" },

    { question: "¿Cada cuánto tiempo debe actualizarse la contraseña del Certificado SEACE?", 
    options:  
    ["Cada 4 meses", 
    "Cada 6 meses", 
    "Cada año", 
    "No necesita actualizarse"], 
    answer: "Cada 4 meses" },

    { question: "Cuál es el objetivo principal del SEACE?", 
    options: ["Administrar los impuestos estatales", 
    "Centralizar las cuentas públicas", 
    "Facilitar la transparencia y eficiencia en las contrataciones estatales", 
    "Proporcionar fondos a entidades privadas"], 
    answer: "Facilitar la transparencia y eficiencia en las contrataciones estatales" },

    { question: "¿Qué beneficios tiene estar en el RNP para los proveedores?", 
    options:
     ["Recibir pagos automáticamente", 
    "Acceder a licitaciones y a guías y cursos de capacitación", 
    "Reducir impuestos", 
    "Evitar auditorías"], 
    answer: "Acceder a licitaciones y a guías y cursos de capacitación" },

    { question: "¿Qué significa la 'Buena Pro'?", 
    options: ["Rechazo de una oferta en licitación", 
    "Suspensión de un contrato", 
    "Aceptación de una oferta en licitación pública", 
    "Evaluación de proveedores"], 
    answer: "Aceptación de una oferta en licitación pública" },

   
    
];
let prizes = [
    { name: "Chocolate", image: "images/chocolate.png" },
    { name: "Dulce", image: "images/dulce.jpg" },
    { name: "Fruta", image: "images/fruta.jpg" },
    { name: "Pastel", image: "images/pastel.jpg" }
];

// Inicia el juego con los nombres de los jugadores
function startGame() {
    players[0] = document.getElementById("player1").value || "Jugador 1";
    players[1] = document.getElementById("player2").value || "Jugador 2";
    currentPlayer = 0;
    score = [0, 0]; // Reinicia el marcador
    document.getElementById("score1").textContent = score[0];
    document.getElementById("score2").textContent = score[1];

    // Oculta la sección de inicio y muestra la pregunta y el tablero de Michi
    document.querySelector(".player-inputs").style.display = "none";
    document.querySelector(".question-container").style.display = "block";
    document.querySelector(".board").style.display = "grid";
    document.getElementById("scoreboard").style.display = "block";
    
    showNextQuestion();
    updateTurnMessage();
}

// Actualiza el mensaje de turno del jugador
function updateTurnMessage() {
    document.getElementById("currentPlayerTurn").textContent = `${players[currentPlayer]}'s Turn (${currentPlayer === 0 ? "X" : "O"})`;
}

// Muestra una pregunta aleatoria
function showNextQuestion() {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const questionData = questions[questionIndex];
    document.getElementById("question").textContent = questionData.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    // Letras de opciones
    const optionLabels = ["A", "B", "C", "D"];
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${optionLabels[index]}. ${option}`;
        button.onclick = () => checkAnswer(option, questionData.answer);
        optionsDiv.appendChild(button);
    });
}



// Verifica la respuesta del jugador 
function checkAnswer(selected, correct) {
    const feedback = document.getElementById("answerFeedback");

    if (selected === correct) {
        feedback.textContent = "¡Correcto!";
        score[currentPlayer]++;
        document.getElementById(`score${currentPlayer + 1}`).textContent = score[currentPlayer];
    } else {
        feedback.textContent = "Incorrecto. Pierdes tu turno.";
        switchPlayer();
    }

    // Limpia el feedback después de un breve retraso (1 segundo)
    setTimeout(() => {
        feedback.textContent = "";
    }, 2000); // Tiempo en milisegundos, ajustable según prefieras
}

// Cambia de jugador
function switchPlayer() {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    updateTurnMessage();
    showNextQuestion();
}

// Marca una celda del tablero si está disponible 
function markCell(index) {
    // Evita marcar si ya está ocupada o si el juego ha terminado
    if (board[index] || document.getElementById("winnerMessage").style.display === "block") return;
    
    // Marca la celda para el jugador actual
    board[index] = currentPlayer === 0 ? "X" : "O";
    const cell = document.querySelectorAll(".cell")[index];
    cell.textContent = board[index];
    cell.classList.add(board[index]);

    // Verifica si hay ganador o empate después de la jugada
    if (checkWin()) {
        showWinnerMessage();
    } else if (isBoardFull()) {
        showDrawMessage(); // Muestra el mensaje de empate si el tablero está lleno
    } else {
        switchPlayer(); // Cambia de jugador si no hay ganador ni empate
    }
}

// Verifica si hay un ganador en el tablero
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Verifica si el tablero está lleno (empate)
function isBoardFull() {
    return board.every(cell => cell !== null);
}

// Muestra el mensaje de ganador con premio aleatorio
function showWinnerMessage() {
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById("winnerText").textContent = `${players[currentPlayer]} ha ganado un ${prize.name}!`;
    document.getElementById("prizeImage").src = prize.image;
    document.getElementById("winnerMessage").style.display = "block";
    document.querySelector(".board").style.display = "none"; // Oculta el tablero de Michi
}

// Muestra el mensaje de empate con imagen de "muerto"
function showDrawMessage() {
    document.getElementById("winnerText").textContent = "EMPATE";
    document.getElementById("prizeImage").src = "/images/muerto.jpg"; // Cambia a la ruta de la imagen de "muerto"
    document.getElementById("winnerMessage").style.display = "block";
    document.querySelector(".board").style.display = "none"; // Oculta el tablero de Michi
}

// Resetea el juego y lleva a la pantalla de inicio
function resetGame() {
    // Limpia el tablero
    board = Array(9).fill(null);
    document.querySelectorAll(".cell").forEach(cell => (cell.textContent = ""));

    // Oculta mensaje del ganador/empate y muestra la sección de inicio
    document.getElementById("winnerMessage").style.display = "none";
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".board").style.display = "none";
    document.querySelector(".player-inputs").style.display = "block";
    document.getElementById("scoreboard").style.display = "none";

    // Limpia los campos de nombres
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
}

