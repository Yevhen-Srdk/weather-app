const BASE_URL = "https://fakestoreapi.com/products";

function request<T>(
  url: string,
  method: "POST" | "GET" | "DELETE" | "PATCH" = 'GET',
  data?: unknown,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = { "Content-Type": "application/json" };
  }

  return fetch(BASE_URL + url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null as T;
    }

    return response.json();
  });
}

export const client = {
    get: <T>(url: string) => request<T>(url),
    post: <T>(url: string, data: unknown) => request<T>(url, 'POST', data),
    patch: <T>(url: string, data: unknown) => request<T>(url, 'DELETE', data),
    delete: <T>(url: string) => request<T>(url, 'DELETE'),
}
