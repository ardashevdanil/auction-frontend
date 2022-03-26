function get() {
  return Promise.resolve({
    data: { id: "123", name: "Joka" },
    status: 200,
  });
}

function patch() {
  return Promise.resolve({
    status: 200,
  });
}

export const userApiMock = {
  get,
  patch,
};
