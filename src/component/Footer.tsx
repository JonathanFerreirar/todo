import { Github, Linkedin, ListTodo } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="sm:px-16 px-5 sm:block absolute w-full bottom-3 hidden">
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
          <Linkedin className="text-primary-greNew dark:text-primary-light animate-bounce animate-infinite animate-duration-1000 animate-ease-linear animate-delay-[7220ms]" />
          <Github className="text-primary-greNew dark:text-primary-light animate-bounce animate-infinite animate-duration-1000 animate-ease-linear animate-delay-[7430ms]" />
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

