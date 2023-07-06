const userUrl = "http://localhost:5000/users";

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> {
  return fetch(`${userUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => data.json());
}

export async function registerUser({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<any> {
  return fetch(`${userUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).then((data) => data.json());
}

export async function logout(token: string) {
  return fetch(`${userUrl}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  }).then(() => localStorage.clear());
}
