export async function getAllComments() {
  return await [
    {
      user: {
        name: "Nicholas Cage",
        avatar: "https://www.placecage.com/120/120"
      },
      content: "Lorem ipsum dolor sit amet",
      date: "2021-01-31"
    }
  ];
}

export async function createComment(data) {
  return await {
    ...data,
    date: new Date().toISOString()
  };
}
