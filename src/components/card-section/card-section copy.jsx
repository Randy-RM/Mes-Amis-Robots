import Card from '../card/card.jsx'

let CardSection = function (props) {

    function renderContacts() {
        return (
            <>
                {props.listeContact.map((contact) => {
                    return <Card key={contact.id} id={contact.id} nom={contact.nom} preNom={contact.preNom} age={contact.age} handleDelete={props.handleDelete} />;
                })}
            </>
        );
    }

    return (
        <>
            <div className="col-md-12 py-1 my-1">
                <div className="row p-1">
                    <Card key="01" id="01" nom="Hyper lol" preNom="LOL" age="2" email="robot@robnation.com" />
                    <Card key="02" id="02" nom="Hyper lol" preNom="LOL" age="2" email="robot@robnation.com" />
                    <Card key="03" id="03" nom="Hyper lol" preNom="LOL" age="2" email="robot@robnation.com" />
                    <Card key="03" id="03" nom="Hyper lol" preNom="LOL" age="2" email="robot@robnation.com" />
                </div>
            </div>
        </>
    );
}

export default CardSection;