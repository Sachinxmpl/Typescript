import { ReactNode } from "react"

// function Box({heading}:{heading : string}) {
//   return (
//     <div>


//             <h1> {heading} </h1>

//     </div>
//   )
// }


//*Better way 
type PropsType = {
    heading : string ,
    count : number  , 
    func1 : (a:string)=>void , 
    children : ReactNode
}

function Box({heading , count , func1 , children} : PropsType) {
    func1("This is a string ")
    return (
        <>
                <div>
                    <h1> {heading} </h1>
                    <h1> {count}</h1>
                </div>
                {
                    children
                }
        </>

    )
}
export default Box