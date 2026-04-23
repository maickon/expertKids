const CONFIG = {
    // ── API ──────────────────────────────────────────────────────────────
    API_BASE_URL: 'https://api.mksoft.com.br/mp/',

    // ── Planos (R$) ──────────────────────────────────────────────────────
    PLAN_VALUE: 97.00,                      // 1 filho
    PLAN_PRICES: [97, 167, 227, 277, 317],  // 1 a 5 filhos

    // ── Contato ───────────────────────────────────────────────────────────
    WHATSAPP_NUMBER: '5522981877899',       // formato: DDI + DDD + número, sem espaços
    WHATSAPP_MSG_PAIS:   'Olá! Tenho dúvidas sobre o ExpertKids para minha família.',
    WHATSAPP_MSG_ESCOLA: 'Olá! Tenho interesse no ExpertKids para minha escola.',
    EMAIL_ESCOLAS: 'escolas@expertkids.space',

    // ── App ───────────────────────────────────────────────────────────────
    APP_NAME: 'ExpertKids',
    SITE_URL: 'https://expertkids.space',

    // ── E-mails de teste (bypassam verificação na API) ────────────────────
    // Esses e-mails fazem login diretamente sem consultar o backend.
    // Remova da lista antes de ir para produção real, ou mantenha apenas
    // endereços confiáveis de administradores.
    TEST_EMAILS: [
        'admin@expertkids.space',
        'teste@expertkids.space',
        'maickon@mksoft.com.br',
    ],
};
