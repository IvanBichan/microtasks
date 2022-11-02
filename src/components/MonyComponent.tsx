import React from "react";


type MonyComponentPropsType = {
    currentMoney:MoneyType[],
    onClickFilterHandler:(buttonName:FilterType)=>void,
}
type MoneyType = {
    banknots:string,
    value:number,
    number:string,
}
type FilterType = 'all' | 'rubl' | 'dollar'

export const MonyComponent = (props:MonyComponentPropsType) => {

    const onClickHandler = (buttonName:FilterType) =>{
    props.onClickFilterHandler(buttonName)
    }
    return(
        <div>
            <ul>
                {props.currentMoney.map((m,i)=>{
                    return(
                        <li key={i}>
                            <span>{m.banknots} -- </span>
                            <span>{m.value} -- </span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>onClickHandler('all')} >all</button>
            <button onClick={()=>onClickHandler('rubl')} >rubl</button>
            <button onClick={()=>onClickHandler('dollar')} >dollar</button>
        </div>
    )
}