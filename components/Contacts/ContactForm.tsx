"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Должно быть не менее 2 символов.",
  }),
  message: z.string().min(2, {
    message: "Должно быть не менее 2 символов.",
  }),
});

interface IContactFormProps {
  botToken: string;
  chatId: string;
}
export function ContactForm({ botToken, chatId }: IContactFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const botUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(botUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Почта: ${data.email}\nСообщение: ${data.message}`,
        parse_mode: "HTML",
      }),
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          toast({
            title: "Сообщение отправлено",
            description: (
              <>
                <p>Спасибо за ваше обращение</p>
                <p>Мы свяжемся с вами в ближайшее время</p>
              </>
            ),
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Произошла ошибка",
          description: err.message,
        });
      });
  }

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        encType="multipart/form-data"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Textarea placeholder="Ваше сообщение..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  );
}
