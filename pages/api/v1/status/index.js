function status(request, response) {
  response.status(200).json({ status: "Status OK 🔥"})
}

export default status;