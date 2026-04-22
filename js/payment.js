// Módulo de Integração com Mercado Pago (Via Proxy mksoft)
const PaymentProvider = {
    
    /**
     * Cria um novo pagamento via Pix ou Cartão (Checkout)
     * @param {string} email 
     * @returns {Promise<Object>} Dados do QR Code ou Link
     */
    createPayment: async function(email, amount, description) {
        try {
            const response = await fetch(CONFIG.API_BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'create_payment',
                    email: email,
                    amount: amount || CONFIG.PLAN_VALUE,
                    description: description || 'ExpertKids - Acesso Anual',
                })
            });
            return await response.json();
        } catch (e) {
            console.error("Erro ao criar pagamento:", e);
            return { error: true };
        }
    },

    /**
     * Verifica se o e-mail possui assinatura ativa no banco de dados JSON do servidor
     * @param {string} email 
     * @returns {Promise<Object>}
     */
    verifyAccess: async function(email) {
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}?action=check_access&email=${email}`);
            const data = await response.json();
            
            // Retorna dados do plano se ativo, ou status inativo
            return data;
        } catch (e) {
            console.error("Erro ao verificar acesso:", e);
            return { status: 'error' };
        }
    },

    /**
     * Inicia o Pooling para verificar aprovação do pagamento
     * @param {string} email 
     * @param {function} onSuccess 
     */
    startPaymentPolling: function(email, onSuccess) {
        const interval = setInterval(async () => {
            const check = await this.verifyAccess(email);
            if (check.status === 'active') {
                clearInterval(interval);
                onSuccess(check);
            }
        }, 5000); // Checa a cada 5 segundos
        return interval;
    },

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
                remainingTime: Math.ceil(remaining / (60 * 1000)) + ' min'
            };
        }
        return { active: false, expired: true };
    }
};
