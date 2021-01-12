jest.mock("../services/CoursesRepository");

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import CourseCollection from "../components/CourseCollection";
import CoursesRepository from "@/services/CoursesRepository";

const course = {
  slug: "my-course",
  title: "My course title",
  img: "img.jpg",
  description: "Lorem ipsum",
};

describe("CourseCollection component", () => {
  it("should list courses", async () => {
    let coursesRepo = new CoursesRepository();
    coursesRepo.searchAll.mockResolvedValue([course]);

    render(CourseCollection, {
      props: { coursesRepo },
    });

    const courseLink = await screen.findByRole("link", {
      name: course.title,
    });

    expect(courseLink).toBeInTheDocument();

    coursesRepo.searchAll.mockReset();
  });
});
