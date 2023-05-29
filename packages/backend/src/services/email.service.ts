import { sendEmail } from '../helpers/send-email';

class EmailService {
  private loginLink = process.env.FRONTEND_LOGIN_URL || '';

  templateId = process.env.SENDGRID_TEMPLATE_ID || '';

  public async sendEmailPassword(email: string, password: string): Promise<boolean> {
    const mail = {
      to: email,
      templateId: this.templateId,
      dynamic_template_data: {
        password,
        loginLink: this.loginLink
      }
    };

    const result = await sendEmail(mail);
    return result;
  }
}

export const emailService = new EmailService();
