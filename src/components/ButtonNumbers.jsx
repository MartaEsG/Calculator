
export default function ButtonNumbers ({data}){

    function newEl (event) {  
        const valor = event.target.id;
        return console.log(valor)
    }

    return <div>
        {data.map((item, index) => <div key={index}>
            <button id ={index} onClick={newEl}>{item}</button>
        </div>)}
    </div>
}

