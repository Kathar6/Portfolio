const httpClient = async (url: string) => {
  const response = await fetch(`${process.env.API_URL}${url}`)

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.")

    const errorRequest = await response.json()
    error.cause = errorRequest

    throw error
  }

  return response.json()
}

export default httpClient
