const catalogUrl = "http://localhost:5000/catalog";

export async function scrape(url: string, domain: string): Promise<any> {
  
    return fetch(`${catalogUrl}/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, domain }),
    }).then((data) => data.json());
  }
  
