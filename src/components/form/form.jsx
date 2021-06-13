import Input from "../input/input.jsx";

let Form = function (props) {

    return (
        <>
            <div className="col-xs-12 col-sm-12 col-md-4 mx-auto py-1 my-1">
                <div className="">
                    <form>
                        <Input type="text" value={props.searchBar} id="searchBar" name="searchBar" placeholder="Rechercher par nom" handleChange={props.handleChange} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;