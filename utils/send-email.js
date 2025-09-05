import {emailTemplates} from "./email-template.js";

export const sendReminderEmail = async ({ to, type,subscription }) => {
    if(!to || !type) throw new Error('Missing required parameters');

    const template = emailTemplates.find((t) => t.label === type);

    if (!template) throw new Error ('Invalid email type');

    const mailInfo = {
        userName: subscription.user.name,
        subscriptionName: subscription.name,
        renewalDate: dayjs(subscription.renewalDate).format( 'MMM D, YYYY'),
        planName: subscription.name,
        price: `${subsciption.currency} ${subscription.price} (${subscription.frequency})`,
        paymentMethod: subscription.paymentMethod,
    }

    const message = template.generateBody(mailInfo);
    const subject = generateSubject(mailInfo);


    const mailOptions = {
        from: accountEmail,
        to: to,
        subject: subject,
        html: message,
    }
}