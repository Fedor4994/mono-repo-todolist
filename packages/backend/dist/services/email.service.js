"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const send_email_1 = require("../helpers/send-email");
class EmailService {
    constructor() {
        this.loginLink = process.env.FRONTEND_LOGIN_URL || '';
        this.templateId = process.env.SENDGRID_TEMPLATE_ID || '';
    }
    async sendEmailPassword(email, password) {
        const mail = {
            to: email,
            templateId: this.templateId,
            dynamic_template_data: {
                password,
                loginLink: this.loginLink
            }
        };
        const result = await (0, send_email_1.sendEmail)(mail);
        return result;
    }
}
exports.emailService = new EmailService();
//# sourceMappingURL=email.service.js.map