class studentController {
  static get_session_info = (req, res) => {
    console.log("session :-",req.session);
    console.log("session Id :-", req.session.id);
    console.log("session cookie :-",req.session.cookie);

    res.send('Session Info');
  };
}
module.exports = studentController;
