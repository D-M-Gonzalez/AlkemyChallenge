export async function registerUser(input) { //Controlador utilizado para crear un nuevo usuario
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        password: input.password,
        name: input.name,
        surname: input.surname,
        address: input.address,
        phonenumber: input.phonenumber,
      }),
    };
    console.log(requestOptions.body)
    const response = await fetch(
      "https://alkemychallengebackend.herokuapp.com/api/users/",
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
  }