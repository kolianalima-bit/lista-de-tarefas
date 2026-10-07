function login(event) {
            event.preventDefault()
            let email = document.querySelector("#email").value;
            let senha = document.querySelector("#senha").value;
            let dados = {
                email,
                senha
            }
            fetch("https://js-lista-de-tarefas-api.onrender.com/login", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(dados)
            })
                .then(resposta => resposta.json())
                .then(json => {
                    if (json.tipo == "error") {
                        alert(json.mesagem);
                        retorn;

                    }
                    console.log(json);
                })

                .catch(error => {
                    alert(error.message);
                })
        }