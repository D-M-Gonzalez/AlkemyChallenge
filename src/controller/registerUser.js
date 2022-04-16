export async function registerUser(input) { //Calls for the creation of a new user in the server  
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
    return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
  }