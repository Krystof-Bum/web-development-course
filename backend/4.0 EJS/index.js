import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = new Date().getDay();
  let dayType;
  let advice;

  if (day === 0 || day === 6) {
    dayType = "Weekend";
    advice = "Have Fun";
  } else {
    dayType = "Weekday";
    advice = "Work Hard";
  }

  res.render("index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
