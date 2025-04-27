export async function req(path: string, option?: RequestInit) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        globalThis.document &&
        `Bearer ${
          document.cookie
            .split(";")
            .find((c) => c.trim().startsWith("token="))
            ?.split("=")[1]
        }`
    },

    ...option
  };
  return await fetch(`http://localhost:3000/${path}`, options).then((res) => res.json());
}
