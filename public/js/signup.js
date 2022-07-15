const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-field");
  const password = document.querySelector("#password-field");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const responseData = await response.json();

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Unable to sign up: " + responseData.message);
  }
};

document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);
