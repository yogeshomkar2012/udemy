const StudentModel = require('../model/student');
class StudentController {
  static createDoc = async (req, res) => {
    try {
      let { name, age, fees } = req.body;
      const doc = new StudentModel({
        name: name,
        age: age,
        fees: fees,
      });
      const result = await doc.save();
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  };
  static getAllDoc = async (req, res, next) => {
    try {
      const result = await StudentModel.find();
      res.render('index', {
        pageTitle: 'admin page',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static editDoc = async (req, res, next) => {
    try {
      const result = await StudentModel.findById(req.params.id);
      console.log(result);
      res.render('edit', { data: result, pageTitle: 'Update' });
    } catch (error) {
      console.log(error);
    }
  };
  static updateDocById = async (req, res, next) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  };
  static deleteDocById = async (req, res, next) => {
    try {
      await StudentModel.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = StudentController;
