export async function createItem(input) { //Controlador para crear un nuevo item en el servidor
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: input.user_id, //Pasa la id de usuario en el body
        description: input.description,
        category: input.category,
        date: input.date,
        value: input.value,
        type: input.type,
      }),
    };
    const response = await fetch(
      "https://alkemychallengebackend.herokuapp.com/api/items/",
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}