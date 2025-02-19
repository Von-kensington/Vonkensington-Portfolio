"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md bg-black text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Name"
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-gray-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </CardFooter>
    </Card>
  );
}
