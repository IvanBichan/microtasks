import React from "react";

type NewComponentPropsType = {
    //students:Array<StudentType>
    students: StudentType[]
    topCars: CarType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}
type CarType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {


    return (
        <>
            <div>{props.students.map(
                (m) => {
                    return (
                        <div key={m.id}><span>{m.name} - {m.age}</span></div>
                    )
                }
            )}
            </div>
            <table>
                {props.topCars.map(
                    (m, i) => {
                        return (<tbody key={i}>
                            <tr>
                                <td>{m.manufacturer}</td>
                                <td>{m.model} -- {i}</td>
                            </tr>
                            </tbody>
                        )
                    }
                )}
            </table>


        </>
    )
}


