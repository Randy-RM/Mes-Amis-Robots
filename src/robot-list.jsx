import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "./components/loading/loading.jsx";
import CardSection from "./components/card-section/card-section.jsx";
import Form from "./components/form/form.jsx";

const RobotList = function () {
  let [searchBar, setSearchBar] = useState("");
  let [loading, setLoading] = useState(false);
  let [listRobot, setListRobot] = useState([]);
  let [listRobotTemp, setListRobotTemp] = useState(listRobot);
  let [errors, setErrors] = useState();
  let history = useHistory();

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    setLoading(true);
    fetch(url)
      .then(function (respons) {
        return respons.json();
      })
      .then(function (users) {
        setListRobot(users);
        setListRobotTemp(users);
        setLoading(false);
      })
      .catch((error) => {
        setErrors(error);
        setLoading(false);
      });
  }, []);

  let handleChangeSearchBar = (event) => {
    setSearchBar(event.target.value);
    let searchResult = listRobot.filter(function (robots) {
      return robots.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    setListRobotTemp(searchResult);
  };

  let handleClickCard = (id) => {
    history.push(`/robot-detail/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : errors ? (
        <>
          <div className="container px-1 py-2 my-2">
            <h1 className="display-5 fw-bold text-center">Une erreur Fatal</h1>
          </div>
        </>
      ) : (
        <>
          <div className="container px-1 py-2 my-2">
            <h1 className="display-5 fw-bold text-center sega-font">
              Mes amis Robots
            </h1>
            <div className="col-md-12 p-1 mx-auto">
              <div className="container">
                <div className="row">
                  <Form
                    value={searchBar}
                    handleChange={handleChangeSearchBar}
                  />
                </div>
              </div>
              <div className="container">
                <div className="">
                  {listRobotTemp.length > 0 ? (
                    <CardSection
                      listRobot={listRobotTemp}
                      handleClickCard={handleClickCard}
                    />
                  ) : (
                    <div className="container px-1 py-2 my-2">
                      <h2 className="display-5 fw-bold text-center text-light">
                        Aucun ami robot trouvé avec ce nom
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RobotList;
