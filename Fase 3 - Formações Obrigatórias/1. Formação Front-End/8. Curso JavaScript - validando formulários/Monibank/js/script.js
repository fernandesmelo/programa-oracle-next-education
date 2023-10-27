import ehUmCPF from "./valida-cpf";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo());
} )

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.legth >= 11) {
        ehUmCPF(campo);
    }
}