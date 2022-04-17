export async function deleteItem(user_id,item_id) { //Controlador utilizado para borrar items 
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `https://alkemychallengebackend.herokuapp.com/api/items?user_id=${user_id}&item_id=${item_id}`, //Pasa las ID por medio de query
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}