require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// netlify way of main export point
// netlify sets up this API endpoint for the payment process during building process
// by looking specifically for the js files in the ./netlify/functions/ folder
// url: "/.netlify/functions" => "/." specify relative to the root path of the project
exports.handler = async (event) => {
  try {
    const { totalPrice } = JSON.parse(event.body);

    const payment = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ payment }),
    };
  } catch (err) {
    console.log({ err });
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};
