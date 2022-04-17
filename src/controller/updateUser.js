export async function updateUser(input) { //Controlador utilizado para modificar un usuario
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:input.id,
        email: input.email,
        password: input.password,
        name: input.name,
        surname: input.surname,
        address: input.address,
        phonenumber: input.phonenumber,
      }),
    };
    const response = await fetch(
      `https://alkemychallengebackend.herokuapp.com/api/users/${input.id}`, //Pasa la id por medio de query
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
  }