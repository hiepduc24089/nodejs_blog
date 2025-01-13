import Course from "../models/Course.js";
import {multipleMongooseToObject} from '../../ulti/mongoose.js';

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
    .then(([courses, deletedCount]) => {
      res.render('me/stored-courses', {
        deletedCount,
        courses: multipleMongooseToObject(courses),
      });
    })
    .catch(next);
  }
  
  // [GET] /trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
        .then((courses) => {
            console.log(courses); // In ra danh sách các bản ghi bị soft delete
            res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses),
            });
        })
        .catch(next);
  }
}

export default new MeController();
