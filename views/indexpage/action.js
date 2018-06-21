export const ActionsType = {
    init:'init',
    inputText:'inputText'
}

export function actions(types,data) {
    return {
        type: ActionsType[types],
        data
    }
}