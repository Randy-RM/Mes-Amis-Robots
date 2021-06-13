const Card = function (props) {
  let minImage = 100;
  return (
    <>
      <div id={props.id} className="col-md-3 my-4 text-center">
        <div
          className="rounded-3 py-3 my-2 card"
          onClick={() => props.handleClickCard(props.id)}
        >
          <p className="col-12">
            <img
              className="img-fluid"
              src={`https://robohash.org/${props.id + minImage}`}
              alt={`${props.name} profil`}
            />
          </p>
          <h2 className="col-12">{props.name}</h2>
          <p className="col-12">{props.email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
