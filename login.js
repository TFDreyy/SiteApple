const form = document.getElementById('formulario');
const nomeCompletoInput = document.getElementById('nomeCompleto');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const dataDeNascimentoInput = document.getElementById('dataDeNascimento');
const botaoDeEnviar = document.getElementById('botaoDeEnviar');

// --- Função para validar o CPF ---
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do Primeiro Dígito Verificador
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    // Validação do Segundo Dígito Verificador
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

// Função para validar a data de nascimento
function validarDataDeNascimento(data) {
    // Converte o valor do input em um objeto Date
    const dataNascimento = new Date(data);

    // Cria um objeto Date para a data de hoje
    const dataAtual = new Date();
    
    // Zera o tempo para comparar apenas o dia, mês e ano
    dataAtual.setHours(0, 0, 0, 0);

    // Compara as datas
    return dataNascimento <= dataAtual;
}

// Função para validar o email
function validarEmail(email) {
    // Expressão regular para validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para validar se todos os campos estão preenchidos
function validarCamposPreenchidos(nomeCompleto, cpf, email, dataDeNascimento) {
    const camposVazios = [];

    if (!nomeCompleto.trim()) {
        camposVazios.push('Nome Completo');
    }
    if (!cpf.trim()) {
        camposVazios.push('CPF');
    }
    if (!email.trim()) {
        camposVazios.push('Email');
    }
    if (!dataDeNascimento.trim()) {
        camposVazios.push('Data de Nascimento');
    }

    if (camposVazios.length > 0) {
        window.alert(`Erro: Os seguintes campos são obrigatórios e devem ser preenchidos:\n- ${camposVazios.join('\n- ')}`);
        return false;
    }

    return true;
}

//  Função para formatar o CPF enquanto o usuário digita 
function formatarCPF(campo) {
    let valor = campo.value.replace(/[^\d]/g, '');

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    campo.value = valor;
}

// Evento de input para formatar o CPF em tempo real
cpfInput.addEventListener('input', function() {
    formatarCPF(this);
});

// Evento submit do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeCompleto = nomeCompletoInput.value;
    const cpf = cpfInput.value;
    const dataDeNascimento = dataDeNascimentoInput.value;
    const email = emailInput.value;

    // Verifica se todos os campos estão preenchidos
    if (!validarCamposPreenchidos(nomeCompleto, cpf, email, dataDeNascimento)) {
        return; // Para a execução se algum campo estiver vazio
    }

    // Verifica se a data de nascimento é válida
    if (!validarDataDeNascimento(dataDeNascimento)) {
        window.alert("Erro: A data de nascimento não pode ser uma data futura. Por favor, corrija.");
        return; // Impede o restante do código de rodar
    }

    // Verifica se o email é válido
    if (!validarEmail(email)) {
        window.alert("Erro: O email informado não possui um formato válido. Por favor, corrija.");
        return; // Impede o restante do código de rodar
    }

    // Verifica se o CPF é válido
    if (!validarCPF(cpf)) {
        window.alert(`O CPF ${cpf} é inválido. Tente novamente.`);
        return; // Impede o restante do código de rodar
    }
    
    // Se todas as validações passarem, exibe os dados
    window.alert("Você foi cadastrado!");
    window.alert(`Nome: ${nomeCompleto}`);
    window.alert(`Data de Nascimento: ${dataDeNascimento}`);
    window.alert(`Email: ${email}`);
});