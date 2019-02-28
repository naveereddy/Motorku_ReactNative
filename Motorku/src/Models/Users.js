export const UserSchema = {
    name :'User',
    properties: {
        name: 'string',
        mobile: 'string',
        age: { type: 'int', default: 10},
        birthday: 'date'
    }
}