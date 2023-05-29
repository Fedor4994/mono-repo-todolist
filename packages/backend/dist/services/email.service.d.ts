declare class EmailService {
    private loginLink;
    templateId: string;
    sendEmailPassword(email: string, password: string): Promise<boolean>;
}
export declare const emailService: EmailService;
export {};
