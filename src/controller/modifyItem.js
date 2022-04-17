export async function modifyItem(input) { //Controlador utilizado para cambiar un item
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: input.user_id, //Pasa la id del usuario actual por body
        item_id: input._id, //Pasa la id del item a modificar por body
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