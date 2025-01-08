import Course from "../models/Course.js";
import {multipleMongooseToObject} from '../../ulti/mongoose.js';

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {res.render('me/stored-courses', {
        courses: multipleMongooseToObject(courses),
      })})
      .catch(next);
  }
}

export default new MeController();
