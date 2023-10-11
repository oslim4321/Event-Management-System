import axios from "axios";

export const fetchSingleEvent = async (id: string, getComment: Boolean) => {
  try {
    const event: any = await axios.post(
      process.env.BASE_URL + "/api/event/" + id,
      { getComment }
    );
    if (!event?.ok) {
    }
    return event.data;
  } catch (error) {
    // throw new Error("failed to fetch data");

    return error;
    // throw Error('failed fetch data on')
  }
};
