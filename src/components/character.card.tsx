export function CharacterCard() {
  return (
    <li className="character col">
      <div className="card character__card">
        <img src="" alt="" className="character__picture card-img-top" />
        <div className="card-body">
          <h2 className="character__name card-title h4"> </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: </li>
              <li>
                Estado:
                <i className="fas fa-thumbs-down"></i>
                <i className="fas fa-thumbs-up "></i>
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled"></ul>
            <div className="character__actions">
              <button className="character__action btn talk">habla</button>
              <button className="character__action btn die">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji"> </i>
      </div>
    </li>
  );
}
