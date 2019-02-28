import realmInstance from '../../Db'

export default class ProfileInteractor {
    addUser(user){
        realmInstance.write(() => {
            realmInstance.create('User',user);
        });
    }
    getUser(){
        const users = realmInstance.objects('User');
        for(let ur of users){
            console.log('user', ur)
        }
    }
}