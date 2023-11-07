import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const Contacts = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container">
        <h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Контакты
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-24">
          Оставляйте вашу заявку или свяжитесь со{" "}
          <Link
            className="hover:underline underline-offset-4 text-lg text-blue-300"
            href={"mailto:jonirootman714@gmail.com"}
          >
            мной
          </Link>
        </p>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
