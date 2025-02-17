import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100 items-center justify-center">
      <Card className="w-[440px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Versel SDK to create a chatbot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>IC</AvatarFallback>
              <AvatarImage src="https://github.com/igorcol.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Usuário:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto illum eos aliquam voluptate enim rerum voluptatum! Quod ex, ullam explicabo nihil dolorem facere eaque in, magni minus libero nulla!
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">ChatBot:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto illum eos aliquam voluptate enim rerum voluptatum! Quod ex, ullam explicabo nihil dolorem facere eaque in, magni minus libero nulla!
            </p>
          </div>

        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
