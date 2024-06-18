document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        try {
            const response = await fetch('/submit_form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, message })
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                // Limpar o formulário após o envio
                document.getElementById('contactForm').reset();
            } else {
                alert('Houve um erro ao enviar a mensagem.');
            }
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
            alert('Houve um erro ao enviar a mensagem.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = 'none';
        }
    });
});