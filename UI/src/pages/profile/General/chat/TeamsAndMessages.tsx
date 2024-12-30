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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserPlus, Send, Search } from "lucide-react";

const teams = [
  { id: 1, name: "Customer Support", members: 12 },
  { id: 2, name: "Product Development", members: 8 },
  { id: 3, name: "Marketing", members: 6 },
  { id: 4, name: "Sales", members: 10 },
  { id: 5, name: "Human Resources", members: 4 },
];

const messages = [
  {
    id: 1,
    sender: "Alice Johnson",
    content: "Has anyone seen the latest customer feedback report?",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "Bob Smith",
    content: "I'm working on it now. Should be ready in an hour.",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "Charlie Brown",
    content: "Great, thanks Bob! Let me know if you need any help.",
    time: "10:40 AM",
  },
  {
    id: 4,
    sender: "Diana Prince",
    content: "Don't forget we have a team meeting at 2 PM today.",
    time: "11:15 AM",
  },
  {
    id: 5,
    sender: "Ethan Hunt",
    content: "I've just uploaded the new product roadmap to our shared drive.",
    time: "11:45 AM",
  },
];

export default function TeamsAndMessages() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Teams and Messages</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Teams</CardTitle>
            <CardDescription>Manage your teams and groups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search teams..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <div>
                      <h3 className="font-semibold">{team.name}</h3>
                      <p className="text-sm text-gray-500">
                        {team.members} members
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </CardContent>
          <CardFooter>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Create New Team
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Team communication hub</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start space-x-4 mb-4"
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`}
                      alt={message.sender}
                    />
                    <AvatarFallback>
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {message.sender}
                    </p>
                    <p className="text-sm text-gray-500">{message.content}</p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form className="flex w-full items-center space-x-2">
              <Input type="text" placeholder="Type your message..." />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
