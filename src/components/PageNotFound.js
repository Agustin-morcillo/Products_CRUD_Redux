import { useHistory } from "react-router-dom"

export default function PageNotFound() {
  const history = useHistory()
  history.push("/")
  return null
}
