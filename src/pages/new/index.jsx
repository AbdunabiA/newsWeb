import { useParams } from "react-router-dom"


const index = () => {
  const {id} = useParams()
  return (
    <div>News {id}</div>
  )
}

export default index