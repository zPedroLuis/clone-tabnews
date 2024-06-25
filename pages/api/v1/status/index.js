//Request trata o que lá do mundo de fora ta entrando dentro do seu sistema
//Response trata o que você quer responder lá pra fora
function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
