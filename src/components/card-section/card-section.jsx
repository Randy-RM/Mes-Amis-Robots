import Card from "../card/card.jsx";

let CardSection = function (props) {
  function renderRobotListContact() {
    return (
      <>
        {props.listRobot.map(({ id, name, username, email }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              username={username}
              email={email}
              handleClickCard={props.handleClickCard}
            />
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="py-1 my-1">
        <div className="row justify-content-center">
          {renderRobotListContact()}
        </div>
      </div>
    </>
  );
};

export default CardSection;
