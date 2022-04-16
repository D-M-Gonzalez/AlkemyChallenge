export async function logInUser(input) { //Log in POST
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: input.email,
        password: input.password,
      }),
    };
    const response = await fetch(
      "https://alkemychallengebackend.herokuapp.com/api/users/login/user",
      requestOptions
    );
    const data = await response.json();
    return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
  }