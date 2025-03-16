 

// Defina o token esperado para validar o webhook
const AUTH_TOKEN = "uVhVeUGlv9NlgyfC7NWPSc1Ylx9qk2YWI";

// Rota para receber o webhook
const webHookRecevied = (req,res) =>{    // Pegando o token do cabeçalho
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader !== `Bearer ${AUTH_TOKEN}`) {
        return res.status(401).json({ error: "Unauthorized: Token inválido" });
    }

    // Pegando os dados enviados pelo webhook
    const { value } = req.body;

    if (!value) {
        return res.status(400).json({ error: "Bad Request: Campo 'value' ausente" });
    }

    console.log("🔔 Webhook recebido:", value);

    // Aqui você pode processar a mensagem e armazená-la no banco de dados se necessário

    res.status(200).json({ message: "Webhook recebido com sucesso!", data: value });
};

module.exports = webHookRecevied;
