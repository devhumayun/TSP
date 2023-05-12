export type counterReducerState = {
    count: number
}

export type counterReducerAction = {
    type: string,
    payload?: number
}

export type counter = {
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
}


export type userProps = {
    name: string,
    age: number,
    skill: boolean
}
