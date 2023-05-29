export interface IEmail {
  to: string;
  templateId: string;
  dynamic_template_data: {
    password: string;
  };
}
