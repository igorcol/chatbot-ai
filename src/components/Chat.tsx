"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from "@ai-sdk/react";

export interface ChatProps {}

export default function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Versel SDK to create a chatbot.</CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-5">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
              {message.role === 'user' && (
                <Avatar>
                    <AvatarFallback>IC</AvatarFallback>
                    <AvatarImage src="https://github.com/igorcol.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário:' : 'ChatBot:'}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Say something..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
