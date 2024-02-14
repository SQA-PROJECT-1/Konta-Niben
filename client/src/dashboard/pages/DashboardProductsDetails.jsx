import React from 'react'

const DashboardProductsDetails = () => {
  const {id} = useParams()
  const[product,setProduct] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/book/${id}`)
  })
  return (
    <div>DashboardProductsDetails</div>
  )
}

export default DashboardProductsDetails