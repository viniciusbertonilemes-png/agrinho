// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ação do Botão Principal (Hero Button)
    const btnConhecer = document.getElementById("btn-conhecer");
    
    btnConhecer.addEventListener("click", () => {
        // Encontra a seção de serviços
        const secaoServicos = document.getElementById("servicos");
        
        // Faz a página rolar suavemente até ela
        secaoServicos.scrollIntoView({ behavior: "smooth" });
    });

    // 2. Efeito visual na Barra de Navegação ao rolar a página
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // Se rolou a página para baixo, deixa o menu ligeiramente transparente
            navbar.style.background = "rgba(27, 94, 32, 0.95)";
            navbar.style.padding = "15px 10%";
        } else {
            // Volta ao estado original no topo
            navbar.style.background = "#1b5e20";
            navbar.style.padding = "20px 10%";
        }
    });
});
