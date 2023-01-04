import { useContext } from 'react'
import Map from '../components/Map'
import AppContext from '../context/AppContext'
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAddress(buyer[0].address)

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer.name}, Gracias por tu compra!`}</h2>
        <span>Tu pedido llegara en los proximos dias a tu direccion</span>
        <div className='Success-map'>
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}
export default Success
