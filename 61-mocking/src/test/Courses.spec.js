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
  date: new Date().toISOString(),
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
    expect(screen.getByText(/a few seconds ago/i)).toBeInTheDocument();

    coursesRepo.searchAll.mockReset();
  });
});
