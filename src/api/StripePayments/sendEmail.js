require("dotenv").config();
const nodemailer = require("nodemailer");

const localEmail = process.env.EMAIL;
const password = process.env.EMAIL_Pass;

const sendMail = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { hostEmail, userEmail, userName, campName, txId, amount } =
      await req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: localEmail,
        pass: password,
      },
      debug: true,
    });

    const sentToUser = {
      from: localEmail,
      to: userEmail,
      subject: `Thanks for participating in our camp.`,
      html: `
        <html>
          <body>
            <h3>Hello, <b>${userName}</b>.</h3>
            <h4>Thanks for participating in our camp <b>${campName}</b>.</h4>
            <h4>We have received your payment of $<span style="font-weight: bold;">${amount}</span> USD.</h4>
            <h4>Your transaction id is: <span style="font-weight: bold;">${txId}</span>.</h4>
            <h5>Keep this id safe.</h5>
            <p>Please contact us for any queries. Thank you.</p>
          </body>
        </html>
      `,
    };
    const sendToHost = {
      from: localEmail,
      to: hostEmail,
      subject: `Payment Received`,
      html: `
       <html>
        <body>
        <h3>User: <b>${userName}</b>, Email: <b>${userEmail}</b> has paid $<span style="font-weight: bold;">${amount}</span> USD for your camp <b>${campName}</b>.</h3>
        <h4>Transaction id is: <span style="font-weight: bold;">${txId}</span>.</h4>
        <p>Please contact us for any queries. Thank you.</p>
        </body>
       </html>
      `,
    };

    await transporter.sendMail(sentToUser);
    await transporter.sendMail(sendToHost);
    // return NextResponse.json({ success: true });
    res.status(201).send({ success: true });
  } catch (error) {
    next(error);
    // return NextResponse.json({
    //   success: false,
    //   error: "Email could not be sent",
    // });
  }
};

module.exports = sendMail;
