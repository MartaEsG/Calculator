import ButtonNumbers from "./ButtonNumbers"

export default function ButtonSum ({text}){
    function Suma (){
        console.log(ButtonNumbers)
    }

    return <button onClick={() => Suma()}>{text}</button>
}