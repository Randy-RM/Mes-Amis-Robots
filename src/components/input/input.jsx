const Input = function (props) {

    return (
        <>
            <div className="mb-2">
                <input type={props.type} value={props.value} className="form-control form-control-lg" id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.handleChange} />
            </div>
        </>
    );
}

export default Input;