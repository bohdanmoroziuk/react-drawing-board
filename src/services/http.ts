export type Meta = Record<string, any>;

export type Method = string;

export type Url = string;

export type Options = RequestInit | undefined;

class FetchError extends Error {
  constructor(meta: Meta = {}) {
    super(meta.client ? meta.cause : `Server error ${meta.status}`);
    Object.assign(this, meta);
    this.name = "FetchError";
  }
}

const makeRequest = (method: Method) => (url: Url, options: Options = undefined) => {
  return fetch(url, { ...options, method })
    .catch((error) => {
      throw new FetchError({ client: true, cause: error });
    })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new FetchError({ server: true, status: response.status, response });
    });
};

export const httpGet = makeRequest("GET");

export const httpPost = makeRequest("POST");
