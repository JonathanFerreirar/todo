import { Github, Linkedin, ListTodo } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-16 hidden">
      <div className="flex justify-between">
        <section>
          <div className="flex items-center gap-4">
            <ListTodo className="text-primary-greNew dark:text-primary-light" />
            <p className="text-[13px] font-monse font-semibold text-primary-greNew dark:text-primary-light">
              TODO_APP
            </p>
          </div>
          <span className="text-[12px] font-monse font-semibold text-primary-greNew dark:text-primary-light">
            Build 21/09/2023
          </span>
        </section>
        <section className="flex items-center gap-4">
          <Linkedin className="text-primary-greNew dark:text-primary-light" />
          <Github className="text-primary-greNew dark:text-primary-light" />
        </section>
      </div>

      <hr className="w-full dark:text-primary-light" />
      <div className="flex justify-end">
        <p className="dark:text-primary-light font-lexend text-xs font-normal">
          @ created by Jonathan Rodrigo
        </p>
      </div>
    </footer>
  );
};

