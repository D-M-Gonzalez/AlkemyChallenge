export async function updateUser(input) { //Calls for the creation of a new user in the server  
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
      `https://alkemychallengebackend.herokuapp.com/api/users/${input.id}`,
      requestOptions
    );
    const data = await response.json();
    return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
  }