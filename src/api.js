export const submitContactForm = async (payload) => {
  return await fetch(
    "https://uz90w9cigi.execute-api.ap-south-1.amazonaws.com/dev/v1/email",
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );
};
