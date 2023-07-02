const catalogUrl = "http://localhost:5000/catalog";

export async function getAll() {
  return fetch(`${catalogUrl}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function scrape(url: string, domain: string): Promise<any> {
  
    return fetch(`${catalogUrl}/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, domain }),
    }).then((data) => data.json());
  }
  
export async function getById(id:string) {
  return fetch(`${catalogUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((data) => data.json());
}