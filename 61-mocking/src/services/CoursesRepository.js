import courses from "./courses.json";

export default class CoursesRepository {
  searchAll() {
    return new Promise(resolve => {
      resolve(courses);
    });
  }
}
