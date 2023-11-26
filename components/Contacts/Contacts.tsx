import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export const Contacts = () => {
  const { BOT_TOKEN, CHAT_ID } = process.env;

  return (
    <section id="contacts" className="py-24">
      <div className="container">
        <h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Контакты
        </h2>
        <div className="flex justify-center mb-24">
          <p className="text-center text-xl text-muted-foreground  max-w-xl">
            Если у вас есть вопросы или предложения оставляйте ваше сообщение
            или свяжитесь через мои социальные сети.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="p-6">
            <ContactForm botToken={BOT_TOKEN || ""} chatId={CHAT_ID || ""} />
          </Card>
          <Card>
            <CardHeader>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Мои контакты
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Почта:
                  <Link
                    target="_blank"
                    href={"mailto:jonirootman714@gmail.com"}
                  >
                    <Button variant={"link"}>jonirootman714@gmail.com</Button>
                  </Link>
                </li>
                <li>
                  Telegram:
                  <Link target="_blank" href={"https://t.me/Poploker"}>
                    <Button variant={"link"}>@Poploker</Button>
                  </Link>
                </li>
                <li>
                  GitLab:
                  <Link
                    target="_blank"
                    href={"https://gitlab.com/jonirootman714"}
                  >
                    <Button variant={"link"}>
                      https://gitlab.com/jonirootman714
                    </Button>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
