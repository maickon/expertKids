// Módulo de Integração de Pagamento (Simulação Cakto)
const PaymentProvider = {
    // URL da API (Placeholder para quando houver um backend real)
    API_URL: 'https://api.cakto.com.br/v1/verify', 

    /**
     * Verifica se o e-mail possui um plano ativo.
     * @param {string} email 
     * @returns {Promise<Object>} Dados do plano ou erro
     */
    verifyAccess: async function(email) {
        console.log(`Consultando status de pagamento para: ${email}...`);
        
        // Simulação de delay de rede
        await new Promise(resolve => setTimeout(resolve, 1500));

        // LÓGICA DE MOCK (PARA TESTE)
        // No mundo real, aqui seria um fetch(API_URL + '?email=' + email)
        const mockPaidEmails = ['teste@expertkids.com.br', 'pai@email.com', 'mae@email.com'];

        if (mockPaidEmails.includes(email.toLowerCase())) {
            return {
                status: 'active',
                plan: 'Anual Familiar',
                startDate: '2026-01-15',
                expiryDate: '2027-01-15',
                value: 97.00,
                licenses: 3
            };
        } else {
            return { status: 'inactive' };
        }
    },

    /**
     * Verifica se o usuário ainda está no período de trial (4h)
     */
    checkTrialStatus: function() {
        const TRIAL_DURATION_MS = 4 * 60 * 60 * 1000;
        const trialStart = localStorage.getItem('expertkids_trial_start');
        
        if (!trialStart) return { active: false, expired: false };
        
        const elapsed = Date.now() - parseInt(trialStart);
        const remaining = TRIAL_DURATION_MS - elapsed;

        if (remaining > 0) {
            return { 
                active: true, 
                expired: false, 
                remainingMs: remaining,
                remainingTime: Math.ceil(remaining / (60 * 1000)) + ' minutos'
            };
        } else {
            return { active: false, expired: true };
        }
    }
};
