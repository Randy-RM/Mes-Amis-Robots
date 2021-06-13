import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./components/loading/loading.jsx";

const RobotDetail = function () {
  let [loading, setLoading] = useState(true);
  let [robotDetail, setRobotDetail] = useState();
  let [errors, setErrors] = useState();
  let { robotId } = useParams();
  let minImage = 100;

  useEffect(() => {
    let url = `http://jsonplaceholder.typicode.com/users/${robotId}`;
    setLoading(true);
    fetch(url)
      .then(function (respons) {
        return respons.json();
      })
      .then(function (robot) {
        setRobotDetail(robot);
        setLoading(false);
      })
      .catch((error) => {
        setErrors(error);
        setLoading(false);
      });
  }, [robotId]);

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
          <div className="container px-1 py-2 my-3">
            <div className="col-md-12 p-1 mx-auto">
              <div className="container">
                <div className="row">
                  <Link className="link-none" to={"/"}>
                    <div className="col-4 mx-auto h3 text-center text-dark bg-warning">
                      {"<-Retour"}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-1 py-2 my-2 bg-pine-blue">
            <h1 className="display-5 fw-bold text-center">{`${robotDetail.name}`}</h1>
            <div className="col-md-12 p-1 mx-auto">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <div
                      id={robotDetail.id}
                      className="row m-2 mx-auto text-center"
                    >
                      <div className="rounded-3 bg-pine-orange">
                        <p className="col-md-12">
                          <img
                            className="img-fluid"
                            src={`https://robohash.org/${
                              robotDetail.id + minImage
                            }`}
                            alt={`${robotDetail.name} profil`}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-5">
                    <div>
                      <h2>identity</h2>
                      <div className="">
                        <p>{robotDetail.name}</p>
                        <p>{robotDetail.username}</p>
                        <p>{robotDetail.email}</p>
                        <p>{robotDetail.address.zipcode}</p>
                      </div>
                    </div>
                    <div className="">
                      <h2>address</h2>
                      <div className="">
                        <p>{robotDetail.address.street}</p>
                        <p>{robotDetail.address.suite}</p>
                        <p>{robotDetail.address.city}</p>
                        <p>{robotDetail.address.zipcode}</p>
                      </div>
                    </div>
                    <div className="">
                      <h2>company</h2>
                      <div className="">
                        <p>{robotDetail.company.name}</p>
                        <p>{robotDetail.company.catchPhrase}</p>
                        <p>{robotDetail.company.bs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RobotDetail;
