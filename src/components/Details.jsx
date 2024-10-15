import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = ({ rollerCoaster }) => {
  let { rollerCoasterId } = useParams()
  const [rollerCoasterDetails, setRollerCoasterDetails] = useState(null)

  useEffect(() => {
    console.log('Roller Coaster Data:', rollerCoaster)
    console.log('Roller Coaster ID from URL:', rollerCoasterId)

    if (rollerCoaster.length > 0) {
      const selected = rollerCoaster.find(
        (rollerCoasterItem) => rollerCoasterItem._id === rollerCoasterId
      )
      setRollerCoasterDetails(selected || null)
    }
  }, [rollerCoaster, rollerCoasterId])

  return rollerCoasterDetails ? (
    <div className="details-container">
      <div class="details-image-container">
        <img
          src={`http://localhost:3001/uploads/${rollerCoasterDetails.image}`}
          alt={rollerCoasterDetails.name}
          className="details-image"
        />
        <div className="details-info">
          <div className="details-info-top">
            <div>
              <h1 className="details-title">{rollerCoasterDetails.name}</h1>
              <p>{rollerCoasterDetails.location}</p>
            </div>
            <div>
              <p>
                <strong>
                  <i class="fa-solid fa-rocket"></i>
                </strong>
                {rollerCoasterDetails.speed} mph
              </p>
              <p>
                <strong>
                  <i class="fa-solid fa-star"></i>
                </strong>
                {rollerCoasterDetails.rating}
              </p>
            </div>
          </div>
          <hr />
          <p className="details-description">
            {rollerCoasterDetails.description}
          </p>
          <p>
            <strong>Manufacturer:</strong> {rollerCoasterDetails.manufacturer}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Details