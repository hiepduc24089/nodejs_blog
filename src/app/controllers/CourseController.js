import Course from '../models/Course.js';
import {mongooseToObject} from '../../ulti/mongoose.js';
import slugify from 'slugify';

//Generate unique slug
async function generateUniqueSlug(name) {
    let baseSlug = slugify(name, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (await Course.findOne({ slug: uniqueSlug })) {
        uniqueSlug = `${baseSlug}-${counter}`;
        counter++;
    }

    return uniqueSlug;
}

class CourseController {
  // [GET] /courses/:slug
  async show(req, res, next) {
    Course.findOne({slug: req.params.slug})
        .then((course)=>{
            res.render('courses/show', {course: mongooseToObject(course)})
        })
        .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  async store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    formData.slug = await generateUniqueSlug(formData.name);
    const course = new Course(formData);
    course.save()
        .then(()=>res.redirect('/'))
        .catch(next);
  }
}

export default new CourseController();
