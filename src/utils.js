import axios from "axios";

export const getData = async (url, stateChanger) => {
  const data = await axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => console.log("error", e));
  if (data) {
    stateChanger(() => {
      const res = [...data.data];
      return [...res];
    });
  }
};

export const getDataObj = async (url, stateChanger) => {
  const data = await axios
    .get(url)
    .then((res) => res.data.data.attributes)
    .catch((e) => console.log("error", e));

  if (data) {
    stateChanger(() => {
      return { ...data };
    });
  }
};
