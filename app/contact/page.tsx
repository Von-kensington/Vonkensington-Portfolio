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
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-full max-w-md container border-gray-700 bg-black z-10 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action="mailto:vonkensington@gmail.com"
            method="get"
            className="space-y-4"
            id="contact-form"
          >
            <div>
              <Input
                type="text"
                placeholder="Subject"
                required
                name="subject"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message..."
                required
                name="body"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            form="contact-form"
            className="w-full bg-white text-black hover:bg-gray-200"
          >
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
