module.exports = {

    checkLogin: (req, res) => {
        const db = req.app.get('db');

        if(!req.user){
            res.status(200).send('puppie')
            }else{
                    db.users.find_session_user([req.user.id]).then( response => {
                        res.status(200).send(response[0])
                    }).catch( (err) => res.status(500).send(console.log(err)))
                
            }
    }, 

    getAdmins: (req, res) => {
        const db = req.app.get('db')
        db.users.get_admins().then( response => {
            console.log("admins:", response[0])
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)))
    },
    removeAdmin: (req, res) => {
        const db = req.app.get('db');
        db.users.remove_admin([req.params.id]).then(response => {
            res.status(200).send(response)
        }).catch( (err) => res.status(500).send(console.log(err)))
    }
}