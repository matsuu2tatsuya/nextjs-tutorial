export default(req, res) => {
  const pid = req.query.pid

  res.end(`Post: ${pid}`)
}
