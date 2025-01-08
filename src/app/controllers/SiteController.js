import Course from '../models/Course.js';
import {multipleMongooseToObject} from '../../ulti/mongoose.js';

class SiteController {
  // [GET] /
  async index(req, res, next) {
    // Cách sử dụng async/await
    // try {
    //   const courses = await Course.find({});
    //   res.json(courses);
    // } catch (error) {
    //   next(error);
    //   res.status(400).json({ error: 'ERROR!!!' });
    // }

    // Sử dụng Promise
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

export default new SiteController();
