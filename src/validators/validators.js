export const required =(value) => {
    if(value) return undefined
    return ' '
}
export const maxLengthCreator = (MaxLength)=> (value)=> {
    if(value && value.length > MaxLength) return undefined
} 