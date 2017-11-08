const actionsType = {
    init:'init',
    inputText:'inputText'
}

export function actions(types,data) {
    return {
        type: actionsType[types],
        data
    }
}