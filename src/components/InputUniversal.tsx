import React, {ChangeEvent, useState} from "react";


type InputUniversalType = {
    sendMessage:(title:string)=>void
}



export const InputUniversal = (props:InputUniversalType) => {
    let [title,setTitle] = useState<string>('')
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler = () => {
      props.sendMessage(title)
        setTitle('')

    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>


        </div>
    )
}