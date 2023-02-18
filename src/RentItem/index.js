import "./index.css";

const RentItem = (props) => {
  const { rentItem, isFavoriteId } = props;
  const {
    imageUrl,
    location,
    address,
    area,
    price,
    type,
    isFavorite,
    bedroom,
    bathroom,
    availableFrom,
    id,
  } = rentItem;

  const getIsFavorite = () => {
    isFavoriteId(id);
  };

  const bedroomValue = () => {
    if (bedroom === undefined) {
      return "";
    }
    return (
      <div className="bathroom-container">
        <img
          src="https://img.icons8.com/fluency-systems-regular/256/bedroom.png"
          alt="bedroom"
          className="bed"
        />
        <p className="bed-bathroom-area">{bedroom} Bedrooms</p>
      </div>
    );
  };

  const bathroomValue = () => {
    if (bathroom === undefined) {
      return "";
    }
    return (
      <div className="bathroom-container">
        <img
          src="https://img.icons8.com/ios/256/shower-and-tub.png"
          alt="bathroom"
          className="bed"
        />
        <p className="bed-bathroom-area">{bathroom} Bathrooms</p>
      </div>
    );
  };

  return (
    <li className="rent-item">
      <img src={imageUrl} alt={type} className="image" />
      <div className="rent-item-details">
        <div className="price-isFavourite-container">
          <h1 className="price">
            ${price}
            <span>/month</span>
          </h1>
          <button
            className="heart-button"
            type="button"
            onClick={getIsFavorite}
          >
            {isFavorite ? (
              <img
                src="https://img.icons8.com/fluency/256/hearts.png"
                alt="not-favourite"
                className="heart"
              />
            ) : (
              <img
                src="https://img.icons8.com/ios/256/hearts.png"
                alt="favourite"
                className="heart"
              />
            )}
          </button>
        </div>
        <p className="location">{location}</p>
        <p className="address">{address}</p>
        <div className="date-container">
          <p className="bed-bathroom-area">Available from: {availableFrom}</p>
        </div>
        <div className="bedroom-bathroom-container">
          {bedroomValue()}
          {bathroomValue()}
          <div className="area-container">
            <img
              src="https://img.icons8.com/external-smashingstocks-thin-outline-smashing-stocks/256/external-Area-Measurement-engineering-smashingstocks-thin-outline-smashing-stocks.png"
              alt="area"
              className="bed"
            />
            <p className="bed-bathroom-area">
              {area}
              <sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default RentItem;
