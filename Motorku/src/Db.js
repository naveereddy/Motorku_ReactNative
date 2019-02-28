import Realm from 'realm'
import { UserSchema } from '../src/Models/Users'

const dbOptions = {
    schema:[ UserSchema ],
    schemaVersion: 0
}
const realm = new Realm(dbOptions)
export default realm;